import { useEffect, useRef, useState, useContext, type FC, ReactElement } from "react";
import AppContext from "../../../AppContext";

const Geolocation: FC = (): ReactElement => {
  const value = useContext(AppContext);
  // const { gameModules, setGameModules, activeModule, setActiveModule } = value;
  const { currentCoords, setCurrentCoords } = value;

  console.log(currentCoords)
  // const [currentCoords, setCurrentCoords] = useState<number[] | null>(null)
  // const currentCoords = useRef<number[] | null>(null)
  const { geolocationAccess, setGeolocationAccess } = value

  useEffect(() => {
    const interval = setInterval(() => {
      if ('geolocation' in navigator) {
        setGeolocationAccess(true)
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          // setCurrentCoords([position.coords.longitude, position.coords.latitude]);
          // currentCoords.current = [position.coords.longitude, position.coords.latitude]
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

  return (
    <></>
  );
};

export default Geolocation;
