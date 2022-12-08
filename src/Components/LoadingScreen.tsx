import React, { type FC, type ReactElement, useState, useEffect } from "react";
import Image from "next/image";
import logo from '../../public/Logo_DarkTheme.svg';
import FadeDiv from "./Helpers/FadeDiv";


interface props {
    setDismount: Function
    dismount: boolean
}

const LoadingScreen = (props : props): ReactElement => {
    const {dismount, setDismount} = props;
    const [startHide, SetStartHide] = useState<boolean>(false)

    console.log(logo)
    useEffect(() => {
      setTimeout(() => {SetStartHide(true)}, 20000)
      setTimeout(() => {setDismount(true)}, 25000)
    }, [])
    
    return (
        logo
        ?
        <FadeDiv show={!startHide} duration={0.5}>
        <div 
        className="flex flex-column justify-center absolute loader-bg w-screen h-screen items-center z-50">
            <Image
                src={logo}
                alt="logo menu button"
                className="w-14 z-10"
            />
            <div className="loader"></div>
        <span className="absolute top-144">Remember to stay safe out there.</span>
        </div>
        </FadeDiv>
        :
        <></>
    )
}

export default LoadingScreen;