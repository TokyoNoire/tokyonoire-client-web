import React, {type FC, type ReactElement, useEffect, useRef} from "react";

const LocationModule: FC = (): ReactElement => {

  const hasMounted = useRef<boolean>(false);

  useEffect(() => {
    if (!hasMounted.current) {
      if ('geolocation' in navigator) {
        console.log('geolocation available')
        navigator.geolocation.getCurrentPosition((position) => {console.log(position.coords.latitude, position.coords.longitude)});
      }
      else console.log('geolocation unavailable')
    }

    hasMounted.current = true;
  }, [hasMounted])

  return (
    <div>
      <h1>LocationModule</h1>
    </div>
  );
};

export default LocationModule;
