import React, { type FC, type ReactElement, useContext, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import TokyoNoireName from "../../../public/Title_DarkTheme.svg";
import HintPopper from "../GameModules/Helpers/HintPopper";
import AppContext from "../../AppContext";
import { useRouter } from "next/router"
import AuthPopUp from "../Authentification/AuthPopUp";

interface props {
  show: boolean
}

const HomeDesktop = (props: props): ReactElement => {
  const value = useContext(AppContext);
  const { userId } = value;
  const [signInChallenge, setSignInChallenge] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(true);
  const router = useRouter()

  useEffect(() => {
    if (userId && userId.length === 28 && signInChallenge === true) {
      router.push('/editor')
    }
  }, [userId])

  const handleClick = () => {
    if (signInChallenge===false){
    setSignInChallenge(true)} else {
      setSignInChallenge(false)
    }
  }

  return (
    <>
      <main className="relative z-10 w-screen h-screen flexCenterDiv place-items-center">
        <TokyoNoireName
          alt="Tokyo Noire Name"
          style={{ maxWidth: "80vw", filter: "drop-shadow(0 0 0.5rem grey)", animation: "pulsate 1s ease-in-out infinite alternate" }}
          />

          {signInChallenge ? (<AuthPopUp setClose={handleClick}/>) : (<></>)}
        <section className="absolute bottom-1/4">
          {userId && userId.length === 28 ? (
            <Link href="/editor">
              <button
                id="themeButton"
                className="font-heading"
                style={{ transform: "scale(1.2)" }}
              >Go To Editor</button>
            </Link>
          ) : (
            <div>
              <button
                onClick={() => { handleClick() }}
                id="themeButton"
                className="font-heading"
                style={{ transform: "scale(1.2)" }}
              >Sign in to access the Editor</button>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default HomeDesktop;