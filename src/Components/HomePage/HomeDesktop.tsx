import React, { type FC, type ReactElement, useContext, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import TokyoNoireName from "../../../public/Title_DarkTheme.svg";
import HintPopper from "../GameModules/Helpers/HintPopper";
import AppContext from "../../AppContext";
import SignInForm from "../Authentification/SignInForm"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router"
import SignUpForm from "../Authentification/SignUpForm";
import AuthPage from "../Authentification/AuthPage";

interface props {
  show: boolean
}

const HomeDesktop = (props: props): ReactElement => {
  const value = useContext(AppContext);
  const { setUserId, userId } = value;
  const [signInChallenge, setSignInChallenge] = useState<boolean>(false);
  const router = useRouter()

  interface prop {
    isConnected: boolean
  }

  useEffect(() => {
    console.log(userId)
    if (userId && signInChallenge === true) {
      router.push('/editor')
    } 
  }, [userId, signInChallenge])

  const handleClick = () => {
    setSignInChallenge(true);
  }

  return (
    <main className="z-10 relative w-screen h-screen flexCenterDiv place-items-center">
      {signInChallenge ? (<AuthPage/>) : (<></>)}
      <TokyoNoireName
        alt="Tokyo Noire Name"
        style={{ maxWidth: "80vw", filter: "drop-shadow(0 0 0.5rem grey)", animation: "pulsate 1s ease-in-out infinite alternate" }}
      />
      <section className="absolute bottom-1/4">
          {/* <button
            onClick={() => {handleClick()}}
            id="themeButton"
            className="font-heading"
            style={{ transform: "scale(1.2)" }}
          >Go To Editor</button> */}
        {userId ? (
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
          onClick={() => {handleClick()}}
          id="themeButton"
          className="font-heading"
          style={{ transform: "scale(1.2)" }}
        >Sign in to access the Editor</button>
       </div>
        )}
      </section>
    </main>
  );
};

export default HomeDesktop;