import React, {type FC, type ReactElement, useEffect, useState, useRef} from "react";

const Geolocation: FC = (): ReactElement => {

  const hasMounted = useRef<boolean>(false);
  const [location, setLocation] = useState<Array<number> | null>(null);

  useEffect(() => {
    if (!hasMounted.current) {
      if ('geolocation' in navigator) {
        console.log('geolocation available')
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation([position.coords.latitude, position.coords.longitude])
          console.log(position.coords.latitude, position.coords.longitude)
        });
      }
      else console.log('geolocation unavailable')
    }

    hasMounted.current = true;
  }, [hasMounted])

  return (
    <div>
      <h1>Geolocation: {location ? `lat: ${location[0]}, long: ${location[1]}` : "not found"}</h1>
    </div>
  );
};

export default Geolocation;
