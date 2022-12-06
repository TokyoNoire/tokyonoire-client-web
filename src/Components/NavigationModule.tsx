import React, { type FC, type ReactElement, useRef, useState, useEffect } from "react";
import Compass from "./Compass";
import Geolocation from "./Helpers/Geolocation";
import Distance from "./Distance"
import BearingAngle from "./Helpers/BearingAngle"

const NavigationModule : FC = (): ReactElement => {
    const { calcBearingAngle } = BearingAngle();
    const { currentCoords } = Geolocation();
    const [targetCoords, setTargetCoords] = useState<number[]>([139.73046793635865, 35.66015647415277])
    const [bearingAngle, setBearingAngle] = useState<number | null>(calcBearingAngle(currentCoords!, targetCoords));

    useEffect(() => {
            const interval = setInterval(() => {
                setBearingAngle(calcBearingAngle(currentCoords!, targetCoords));
                console.log(bearingAngle)

            }, 1000);

            return () => {
                clearInterval(interval)
            }
    })

    return (
        <>
            {currentCoords && targetCoords
            ?
            <Distance 
                currentCoords={currentCoords}
                targetCoords={targetCoords}
            />
            :
            <></>
        }
         {currentCoords && bearingAngle
            ?
            <Compass
                bearingAngle={bearingAngle}
                currentCoords={currentCoords}
            />
            :
            <></>
         }
        </>
    );
};

export default NavigationModule;