import React, { type FC, type ReactElement, useState, useEffect } from "react";
import Image from "next/image";
import northLetter from "../../Assets/Icons/North-letter.svg"
import Gyroscope from "./Gyroscope";

const Compass: FC = (): ReactElement => {
    const { orientation, requestAccessAsync } = Gyroscope();

    // console.log(orientation)
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {

        let interval = setInterval(() => {
            setTime(new Date())
        }, 1000);

        console.log(time.getSeconds() * 6)

        return () => {
            clearInterval(interval)
        }

    })



    return (
        <>
            <div>
                <button
                    onClick={requestAccessAsync}
                >Approve device motion to use the compass</button>
            </div>
            <div className="mt-6">
                <ul style={{ margin: 0, padding: 0 }}>
                    <li>ɑ: {orientation && <code className="language-text">{orientation.alpha}</code>}</li>
                    <li>β: {orientation && <code className="language-text">{orientation.beta}</code>}</li>
                    <li>γ: {orientation && <code className="language-text">{orientation.gamma}</code>}</li>
                </ul>
            </div>


            <div className="compass__wrapper">

                <div className="compass">
                    <div className="compass__outer-ring"></div>
                    <div className="compass__center-dot"></div>
                    <div className="direction-arrow" style={{ transform: `rotateZ(${orientation ? orientation.alpha : 0}deg)` }}></div>
                    <Image
                        src={northLetter}
                        alt="northLetter"
                        className="compass__north-letter"
                        // className="direction-arrow"
                        style={{ transform: `rotateZ(${orientation ? 180 - orientation.alpha : 0}deg) scale(0.4) translateY(300px)` }}
                    />

                </div>
            </div>
        </>
    );
};

export default Compass;