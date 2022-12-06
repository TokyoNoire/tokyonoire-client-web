import React, { type FC, type ReactElement, useRef, useState, useEffect } from "react";
import Compass from "./Compass";
import Geolocation from "./Helpers/Geolocation";

const NavigationModule: FC = (): ReactElement => {
    const { currentCoords } = Geolocation();
    const [targetCoords, setTargetCoords] = useState<number[]>([139.73046793635865, 35.66015647415277])
    const [bearingAngle, setBearingAngle] = useState<number | null>(calcBearingAngle());
    const firstMount = useRef<boolean>(false);

    function toDegrees(number: number) {
        return number * 180 / Math.PI
    }

    function toRadians(number: number) {
        return number * Math.PI / 180
    }

    function calcBearingAngle() {
        // Credit to for formula: https://www.movable-type.co.uk/scripts/latlong.html
        let bearingAngle: number | null = null;
        if (currentCoords && currentCoords[0] && currentCoords[1]
            && targetCoords && targetCoords[0] && targetCoords[1]) {
            const lonO = toRadians(currentCoords[0]),
                latO = toRadians(currentCoords[1]),
                lonT = toRadians(targetCoords[0]),
                latT = toRadians(targetCoords[1]);

            const Y = Math.sin(lonT - lonO) * Math.cos(latT)
            const X = Math.cos(latO) * Math.sin(latT) - Math.sin(latO) * Math.cos(latT) * Math.cos(lonT - lonO)
            const Theta = Math.atan2(Y, X)
            bearingAngle = toDegrees(Theta)
        }
        return bearingAngle;
    }

    useEffect(() => {
        if (!firstMount.current && currentCoords) {
            setBearingAngle(calcBearingAngle());
        }
        firstMount.current = true;
    }, [firstMount, currentCoords, calcBearingAngle])

    useEffect(() => {
        if (firstMount) {

            const interval = setInterval(() => {
                setBearingAngle(calcBearingAngle());
                console.log(bearingAngle)

            }, 3000);

            return () => {
                clearInterval(interval)
            }
        }
    })

    return (
        <>
            <Compass
                bearingAngle={bearingAngle}
                currentCoords={currentCoords}
            />
        </>
    );
};

export default NavigationModule;