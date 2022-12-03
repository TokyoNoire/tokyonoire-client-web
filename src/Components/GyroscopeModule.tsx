import React, {type FC, type ReactElement, useEffect, useCallback, useState, useRef} from "react";

type DeviceOrientation = {
  alpha: number | null,
  beta: number | null,
  gamma: number | null,
};

// interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
//   requestPermission?: () => Promise<'granted' | 'denied'>;
// };

const UseDeviceOrientation: FC = (): ReactElement => {
  const [error, setError] = useState<Error | null>(null);
  const [orientation, setOrientation] = useState<DeviceOrientation | null>(null);

  const onDeviceOrientation = (event: DeviceOrientationEvent): void => {
    setOrientation({
      alpha: event.alpha,
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
      let permission: PermissionState;
      try {
        // @ts-ignore
        permission = await DeviceOrientationEvent.requestPermission();
      } catch (err) {
        // @ts-ignore
        const e = new Error((err && err.message) || 'unknown error');
        setError(e);
        return false;
      }
      if (permission !== 'granted') {
        setError(new Error('Request to access the device orientation was rejected'));
        return false;
      }
    }

    window.addEventListener('deviceorientation', onDeviceOrientation);

    return true;
  };

  return (
    <div>
     <h1>this is working</h1>
     
    </div>
  );
};



export default UseDeviceOrientation;