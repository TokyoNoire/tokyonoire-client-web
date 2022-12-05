import { useRef, useState } from "react";

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
  let permission = useRef<PermissionState | null>(null)

  const onDeviceOrientation = (event: DeviceOrientationEvent): void => {
    setOrientation({
      // @ts-ignore
      alpha: event.webkitCompassHeading ? event.webkitCompassHeading : event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    });
  };

  const revokeAccessAsync = async (): Promise<void> => {
    window.removeEventListener('deviceorientation', onDeviceOrientation);
    setOrientation(null);
  };

  const requestAccessAsync = async (): Promise<boolean> => {
    if (!DeviceOrientationEvent) {
      setError(new Error('Device orientation event is not supported by your browser'));
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
        // either "granted" or "denied"
        permission.current = await DeviceOrientationEvent.requestPermission()
      } catch (err) {
        // @ts-ignore
        const e = new Error((err && err.message) || 'unknown error');
        setError(e);
        return false;
      }
      if (permission.current !== 'granted') {
        setError(new Error('Request to access the device orientation was rejected'));
        return false;
      }
    }

    if (permission.current === "granted") {
      window.addEventListener('deviceorientation', onDeviceOrientation, true)
    };

    return true;
  };

  return {
    orientation,
    requestAccessAsync,
  }

};

export default Gyroscope;