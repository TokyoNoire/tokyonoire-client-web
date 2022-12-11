import { useEffect, useState } from "react";

const Geolocation = () => {

  const [currentCoords, setCurrentCoords] = useState<number[] | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentCoords([position.coords.longitude, position.coords.latitude])
        });
      }
      else console.error('geolocation unavailable')
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  })

  return ({
    currentCoords
  });
};

export default Geolocation;
