import { useState } from "react";
import Haversine from "./Helpers/Haversine";
import React, { useEffect, type ReactElement } from "react";

interface props {
  currentCoords: number[] | null;
  targetCoords: number[] | null;
  setChallengeSuccess: (boolean: boolean) => void;
}

const Distance = (props: props): ReactElement => {
  const { setChallengeSuccess, currentCoords, targetCoords } = props
  const { haversineDistance } = Haversine()
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    if (currentCoords && currentCoords[0] && currentCoords[1] &&
      targetCoords && targetCoords[0] && targetCoords[1]) {
      setDistance(Math.round(haversineDistance(currentCoords, targetCoords) as number))

      if (distance && distance < 50) {
        setChallengeSuccess(true)
        setDistance(null)
      }
    }
  }, [currentCoords, targetCoords, distance, haversineDistance, setChallengeSuccess])

  return (
    <>
      <h1 className="self-center">Distance from target</h1>
      <h1 className="self-center p-1 text-2xl text-center uppercase font-heading">
        {distance} meters
      </h1>
    </>
  );
}

export default Distance;