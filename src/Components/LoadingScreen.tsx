import React, { type FC, type ReactElement, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from '../../public/Logo_DarkTheme.svg';
import FadeDiv from "./Helpers/FadeDiv";
import LoadingScreenHints from "./Helpers/LoadingScreenHints";
// import {ReactComponent as Logo} from '../../public/Logo_DarkTheme.svg';


interface props {
    setLoadScreenMounted: Function
    duration: number
}

const LoadingScreen = (props: props): ReactElement => {
    const { setLoadScreenMounted, duration } = props;
    const [show, setShow] = useState<boolean>(true)
    const [fadeDuration] = useState<number>(0.5) // in seconds.

    const [hint, setHint] = useState<string | undefined>(undefined);

    const [mounted, setMounted] = useState<boolean>(false);

    console.log(Logo)
    useEffect(() => {
        if (!mounted) {
            setHint(LoadingScreenHints[Math.floor(Math.random() * LoadingScreenHints.length)])

        }
        setMounted(true)
    }, [mounted])

    useEffect(() => {
        if (show) {
            setTimeout(() => { setShow(false) }, duration)
        }
        if (!show) {
            setTimeout(() => { setLoadScreenMounted(false) }, fadeDuration * 1000)
        }
    }, [show, mounted])

    return (
        Logo
            ?
            <FadeDiv show={show} duration={fadeDuration}>
                <div
                    className="flex flex-column justify-center absolute loader-bg w-screen h-screen items-center z-50">
                    <Logo className="w-14 z-10" />
                    {/* <Image
                            src={logo}
                            alt="logo menu button"
                            className="w-14 z-10"
                        /> */}
                    <div className="loader"></div>
                    <span className="absolute top-128 text-center display-linebreak" style={{ maxWidth: "90%" }}>{hint}</span>
                </div>
            </FadeDiv>
            :
            <></>
    )
}

export default LoadingScreen;