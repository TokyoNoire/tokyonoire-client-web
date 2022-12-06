import React, { type FC, type ReactElement, useRef, useState, useEffect } from "react";
import Compass from "./Compass";
import Distance from "./Distance"
import BearingAngle from "./Helpers/BearingAngle"
import Gyroscope from "./Helpers/Gyroscope"

interface props {
    setChallengeSuccess: (boolean: boolean) => void;
    locationCoordinates: Array<number>;
}

const NavigationModule = (props: props): ReactElement => {
    const { setChallengeSuccess, locationCoordinates } = props;
    const { orientation, requestAccessAsync } = Gyroscope();

    const { calcBearingAngle } = BearingAngle();

    const [currentCoords, setCurrentCoords] = useState<number[] | null>(null)
    const coords = useRef<number[] | null>(null);
    const [targetCoords, setTargetCoords] = useState<number[]>([locationCoordinates[1]!, locationCoordinates[0]!])
    const [bearingAngle, setBearingAngle] = useState<number | null>(calcBearingAngle(currentCoords!, targetCoords));

    const [acquiredPermissions, setAcquiredPermissions] = useState<boolean>(false);

    useEffect(() => {
        console.log(acquiredPermissions)
        if (acquiredPermissions) {
            const interval = setInterval(() => {
                if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        setCurrentCoords([position.coords.longitude, position.coords.latitude])
                        coords.current = [position.coords.longitude, position.coords.latitude]
                        console.log(position)
                    });
                }
                else console.error('geolocation unavailable')
                setBearingAngle(calcBearingAngle(coords.current!, targetCoords));
            }, 1000);

            return () => {
                clearInterval(interval)
            }
        }
    }, [acquiredPermissions])

    function getPosition(options?: PositionOptions): Promise<GeolocationPosition> {
        return new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject, options)
        );
    }

    const handlePermissions = async () => {
        await requestAccessAsync();
        const position = await getPosition();
        console.log(position)
        setAcquiredPermissions(true);
    }

    useEffect(() => {
        if (!acquiredPermissions) {
            handlePermissions();
        }
    }, [acquiredPermissions])

    return (
        <>
            {currentCoords && targetCoords
                ?
                <Distance
                    currentCoords={currentCoords}
                    targetCoords={targetCoords}
                    setChallengeSuccess={setChallengeSuccess}
                />
                :
                <></>
            }

            <Compass
                bearingAngle={bearingAngle}
                currentCoords={currentCoords}
                targetCoords={targetCoords}
                orientation={orientation!}
            />

        </>
    );
};

export default NavigationModule;