import React, { type ReactElement, useState, useEffect } from "react";
import Logo from 'public/Logo_DarkTheme.svg';
import FadeDiv from "./Helpers/FadeDiv";
import LoadingScreenHints from "./Helpers/LoadingScreenHints";

interface props {
    setLoadScreenMounted: (boolean: boolean) => void
    duration: number
}

const LoadingScreen = (props: props): ReactElement => {
    const { setLoadScreenMounted, duration } = props;
    const [show, setShow] = useState<boolean>(true)
    const [fadeDuration] = useState<number>(0.5) // in seconds.

    const [hint, setHint] = useState<string | undefined>(undefined);

    const [mounted, setMounted] = useState<boolean>(false);

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
    }, [show, mounted, duration, fadeDuration, setLoadScreenMounted])

    return (
        Logo
            ?
            <FadeDiv show={show} duration={fadeDuration}>
                <div
                    className="absolute z-50 flex items-center justify-center w-screen h-screen flex-column loader-bg">
                    <Logo className="z-10 w-14" />
                    {/* <Image
                            src={logo}
                            alt="logo menu button"
                            className="z-10 w-14"
                        /> */}
                    <div className="loader"></div>
                    <span className="absolute text-center top-128 display-linebreak" style={{ maxWidth: "90%" }}>{hint}</span>
                </div>
            </FadeDiv>
            :
            <></>
    )
}

export default LoadingScreen;