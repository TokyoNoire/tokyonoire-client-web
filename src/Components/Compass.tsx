import React, { type FC, type ReactElement, useState, useEffect } from "react";
import Image from "next/image";
import northLetter from "../../Assets/Icons/North-letter.svg"

const Compass: FC = (): ReactElement => {


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
            <div className="compass__wrapper">

                <div className="compass">
                    <div className="compass__outer-ring"></div>
                    <div className="compass__center-dot"></div>
                    <div className="direction-arrow" style={{ transform: `rotateZ(${time.getSeconds() * 6}deg)` }}></div>
                    <Image
                        src={northLetter}
                        alt="northLetter"
                        className="compass__north-letter"
                    />

                </div>
            </div>
        </>
    );
};

export default Compass;