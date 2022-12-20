import React, { type ReactElement, useContext, useEffect, useState, useRef } from "react";
import NorthLetter from "../../../../public/North-letter.svg"
import Gyroscope from "../Helpers/Gyroscope";
import BearingAngle from "../Helpers/BearingAngle";

type DeviceOrientation = {
    alpha: number | null,
    beta: number | null,
    gamma: number | null,
};

interface props {
    // bearingAngle: number | null;
    currentCoords: number[] | null;
    targetCoords: number[] | null;
    // orientation: DeviceOrientation
}

const Compass = (props: props): ReactElement => {
    const {
        currentCoords,
        targetCoords
    } = props;

    const hasMounted = useRef<boolean>(false)
    const { orientation, requestAccessAsync } = Gyroscope();

    useEffect(() => {
        if (!hasMounted.current) {
            requestAccessAsync()
            hasMounted.current = true;
        }
    }, [hasMounted.current])

    const { calcBearingAngle } = BearingAngle();

    const [bearingAngle, setBearingAngle] = useState<number | null>(calcBearingAngle(currentCoords as number[], targetCoords as number[]));

    useEffect(() => {
        if (currentCoords && targetCoords)
            setBearingAngle(calcBearingAngle(currentCoords, targetCoords));
    }, [currentCoords, calcBearingAngle, targetCoords]);

    return (
        <section className="compass__wrapper flexCenterDiv">
            {bearingAngle && orientation && (
                <>
                    <div className="compass flexCenterDiv">
                        <div className="compass__outer-ring"></div>
                        <div className="compass__center-dot"></div>
                        <div className="direction-arrow" style={{
                            transform: `rotateZ(
                        ${bearingAngle && orientation && orientation.alpha
                                    ? bearingAngle - orientation.alpha
                                    : null
                                }deg)`
                        }}></div>

                        <NorthLetter
                            alt="northLetter"
                            className="compass__north-letter"
                            style={
                                {
                                    transform: `rotateZ(${orientation && orientation.alpha
                                        ? 180 - orientation.alpha
                                        : 0
                                        }deg) scale(0.05) translateY(140rem)`
                                }}
                        />
                    </div>

                    {/* <div className="mt-6 flexCenterDiv">
                        <ul style={{ margin: 0, padding: 0 }}>
                            <li>Current Coords: <code className="language-text">{currentCoords ? `${currentCoords![1]}, ${currentCoords![0]}` : null}</code></li>
                            <li>Target Coords: <code className="language-text">{targetCoords ? `${targetCoords![1]}, ${targetCoords![0]}` : null}</code></li>
                            <li>Bearing Angle: <code className="language-text">{bearingAngle}</code></li>
                            <li>Calc:<code className="language-text">{bearingAngle && orientation ? bearingAngle! - orientation!.alpha! : null}</code></li>
                            <li>ɑ: {orientation && <code className="language-text">{orientation.alpha}</code>}</li>
                            <li>β: {orientation && <code className="language-text">{orientation.beta}</code>}</li>
                            <li>γ: {orientation && <code className="language-text">{orientation.gamma}</code>}</li>
                        </ul>
                    </div> */}
                </>
            )}
        </section>
    );
};

export default Compass;