import { useEffect, useState, useContext } from "react";
import AppContext from "../../../AppContext";

const Geolocation = () => {

  const [currentCoords, setCurrentCoords] = useState<number[] | null>(null)
  const value = useContext(AppContext)
  const { geolocationAccess, setGeolocationAccess } = value

  useEffect(() => {
    const interval = setInterval(() => {
      if ('geolocation' in navigator) {
        setGeolocationAccess(true)
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentCoords([position.coords.longitude, position.coords.latitude])
        });
      }
      else {
        setGeolocationAccess(false)
        console.error('geolocation unavailable')
      }
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
