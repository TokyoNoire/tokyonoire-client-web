import { useRef, useState } from "react";
import Haversine from "./Helpers/Haversine";
import React, {useEffect, type FC, type ReactElement } from "react";
import Geolocation from "./Helpers/Geolocation";

const Distance: FC = (): ReactElement => {
//Latitude: 37.331686. Longitude: -122.030656
  const { haversineDistance } = Haversine()
  const { currentCoords } = Geolocation()
  const longitude = currentCoords? currentCoords[0] : null;
  const latitude = currentCoords? currentCoords[1] : null;

  const Cupertino = {latitude: 37.331686, longitude: -122.030656}

  return (
    <>
    <div>
      Distance between your location and the destination:    
      {
        longitude && latitude ? haversineDistance({latitude, longitude}, Cupertino) : <></>
      }
      <br></br>
      Your coordinates:
      Latitude: {latitude} Longitude: {longitude}
      <br></br>
      Destination coordinates:
      Latitude: {Cupertino.latitude}  Longitude:  {Cupertino.longitude}
    </div>
    </>
    );
  }

export default Distance;