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

      if (distance && distance < 50) {
        setChallengeSuccess(true);
        setDistance(null)
      }
    }
  }, [currentCoords, targetCoords, distance, haversineDistance])

  return (
    <>
      <h1 className="self-center text-center mt-8">Distance from target</h1>
      <h1 className="self-center p-1 text-2xl text-center uppercase font-heading">
        {distance} meters
      </h1>
    </>
  );
}

export default Distance;