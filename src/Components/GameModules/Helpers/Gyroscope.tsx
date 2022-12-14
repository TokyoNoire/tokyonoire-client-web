import { useRef, useState, useContext } from "react";
import AppContext from "../../../AppContext";

type DeviceOrientation = {
  alpha: number | null,
  beta: number | null,
  gamma: number | null,
};

type UseDeviceOrientationData = {
  orientation: DeviceOrientation | null;
  requestAccessAsync: () => Promise<boolean>;
}

const Gyroscope = (): UseDeviceOrientationData => {
  const [error, setError] = useState<Error | null>(null);
  const [orientation, setOrientation] = useState<DeviceOrientation | null>(null);
  const permission = useRef<PermissionState | null>(null)
  const value = useContext(AppContext);
  const { gyroscopeAccess, setGyroscopeAccess } = value;

  const onDeviceOrientation = (event: DeviceOrientationEvent): void => {
    setOrientation({
      // @ts-ignore
      alpha: event.webkitCompassHeading ? event.webkitCompassHeading : event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    });
  };

  const requestAccessAsync = async (): Promise<boolean> => {
    if (!DeviceOrientationEvent) {
      setError(new Error('Device orientation event is not supported by your browser'));
      console.error(error)
      return false;
    }

    if (
      // @ts-ignore
      DeviceOrientationEvent.requestPermission
      // @ts-ignore
      && typeof DeviceMotionEvent.requestPermission === 'function'
    ) {
      try {
        // @ts-ignore
        permission.current = await DeviceOrientationEvent.requestPermission() // either "granted" or "denied"
        setGyroscopeAccess(true)
      } catch (err) {
        // @ts-ignore
        const e = new Error((err && err.message) || 'unknown error');
        setError(e);
        setGyroscopeAccess(false);
        return false;
      }
      if (permission.current !== 'granted') {
        setError(new Error('Request to access the device orientation was rejected'));
        return false;
      }
    }

    if (permission.current === "granted") {
      window.addEventListener('deviceorientation', onDeviceOrientation, true)
    }

    return true;
  };

  return {
    orientation,
    requestAccessAsync,
  }

};

export default Gyroscope;