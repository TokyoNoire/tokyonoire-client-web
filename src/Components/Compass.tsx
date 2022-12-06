import React, { type FC, type ReactElement, useState, useEffect, useRef } from "react";
import Image from "next/image";
import northLetter from "../../Assets/Icons/North-letter.svg"
import Gyroscope from "./Helpers/Gyroscope";

interface props {
    bearingAngle: number | null;
    currentCoords: number[] | null
}

const Compass = (props: props): ReactElement => {
    const { bearingAngle, currentCoords } = props;
    const { orientation, requestAccessAsync } = Gyroscope();
    const hasMounted = useRef<boolean>(false);
    useEffect(() => {
        if (!hasMounted.current) {
            requestAccessAsync()
        }
        hasMounted.current = true;
    }, [hasMounted.current])

    return (
        <>
            {/* <div>
                <button
                    onClick={requestAccessAsync}
                >Approve device motion to use the compass</button>
            </div> */}
            <div className="mt-6">
                <ul style={{ margin: 0, padding: 0 }}>
                    {/* <li>Current Coords: <code className="language-text">{currentCoords ? `${currentCoords![1]}, ${currentCoords![0]}` : null}</code></li> */}
                    <li>Bearing Angle: <code className="language-text">{bearingAngle}</code></li>
                    <li>ɑ: {orientation && <code className="language-text">{orientation.alpha}</code>}</li>
                    {/* <li>β: {orientation && <code className="language-text">{orientation.beta}</code>}</li>
                    <li>γ: {orientation && <code className="language-text">{orientation.gamma}</code>}</li> */}
                </ul>
            </div>


            <div className="compass__wrapper">

                <div className="compass">
                    <div className="compass__outer-ring"></div>
                    <div className="compass__center-dot"></div>
                    <div className="direction-arrow" style={{ transform: `rotateZ(${bearingAngle && orientation && orientation.alpha ? bearingAngle - orientation.alpha : null}deg)` }}></div>
                    <Image
                        src={northLetter}
                        alt="northLetter"
                        className="compass__north-letter"
                        // className="direction-arrow"
                        style={
                            {
                                transform: `rotateZ(${orientation && orientation.alpha
                                    ? 180 - orientation.alpha
                                    : 0
                                    }deg) scale(0.4) translateY(300px)`
                            }}
                    />

                </div>
            </div>
        </>
    );
};

export default Compass;