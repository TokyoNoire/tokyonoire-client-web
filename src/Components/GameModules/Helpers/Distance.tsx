import { type MutableRefObject, useState } from "react";
import Haversine from "./Haversine";
import React, { useEffect, type ReactElement } from "react";

interface props {
  currentCoords: number[] | null;
  targetCoords: number[] | null;
  setChallengeSuccess: (boolean: boolean) => void;
  // setGoToNext: (boolean: boolean) => void
}

const Distance = (props: props): ReactElement => {
  const { setChallengeSuccess, currentCoords, targetCoords } = props
  const { haversineDistance } = Haversine()
  const [distance, setDistance] = useState<number | null>(null);
  console.log(distance)

  useEffect(() => {
    if (currentCoords && currentCoords[0] && currentCoords[1] &&
      targetCoords && targetCoords[0] && targetCoords[1]) {
      setDistance(Math.round(haversineDistance(currentCoords, targetCoords) as number))

      if (distance && distance < 50) {
        setChallengeSuccess(true);
        // setGoToNext(true)
        // console.log(challengeSuccess.current)
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