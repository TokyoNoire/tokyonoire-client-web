import { type MutableRefObject, useState, useContext } from "react";
import Haversine from "./Haversine";
import React, { useEffect, type ReactElement } from "react";
import AppContext from "../../../AppContext";

interface props {
  currentCoords: number[] | null;
  targetCoords: number[] | null;
  setChallengeSuccess: (boolean: boolean) => void;
}

const Distance = (props: props): ReactElement => {
  const { setChallengeSuccess, targetCoords } = props
  const { haversineDistance } = Haversine()

  const value = useContext(AppContext)
  const { currentCoords } = value;

  const getDistance = (currentCoords: number[], targetCoords: number[] | null) => {
    if (currentCoords && currentCoords[0] && currentCoords[1] &&
      targetCoords && targetCoords[0] && targetCoords[1]) {
      return Math.round(haversineDistance(currentCoords, targetCoords) as number)
    } else return null;
  }

  const [distance, setDistance] = useState<number | null>(getDistance(currentCoords, targetCoords));

  useEffect(() => {
    if (currentCoords && currentCoords[0] && currentCoords[1] &&
      targetCoords && targetCoords[0] && targetCoords[1]) {
      setDistance(Math.round(haversineDistance(currentCoords, targetCoords) as number))

      if (distance && distance < 30) {
        setChallengeSuccess(true);
        setDistance(null)
      }
    }
  }, [currentCoords, targetCoords, distance, haversineDistance])

  return (
    <>
      <h1 className="self-center text-center text-xl mt-12 font-body2 font-bold uppercase">Distance from target</h1>
      {distance !== null && distance < 1000
        ?
        <h1 className="self-center p-1 text-5xl text-center uppercase font-body2">
          {distance} meters
        </h1>
        :
        <h1 className="self-center p-1 text-5xl text-center uppercase font-body2">
          {Number(distance! / 1000).toFixed(2)} km
        </h1>
      }

    </>
  );
}

export default Distance;