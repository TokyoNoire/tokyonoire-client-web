import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "../Components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mapLocationPicker.css";
import "../styles/compass.css";
<<<<<<< HEAD
import SignInForm from "../Components/SignInForm";
import { SessionProvider } from "next-auth/react";
import AuthRoute from "../Components/AuthRoute";
=======
import "../styles/loadingSpinner.css";
import "../styles/fade.css";
import "../styles/animations.css";
import { useState, useEffect, useRef } from "react";
import LoadingScreen from "../Components/LoadingScreen";

>>>>>>> 9396280a05012c5e1eeacaffb9395b15f067cb27

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {

  const [loadScreenMounted, setLoadScreenMounted] = useState<boolean>(true);
  const [durationLoadingScreen] = useState<number>(2000)
  const [deviceType, setDeviceType] = useState<string | null>(null)

  const compCheck = useRef<boolean>(false);

  useEffect(() => {
    if (!compCheck.current) {
      console.log(typeof Component)
      compCheck.current = true
    } else {
      compCheck.current = false
    }
  }, [Component])


  useEffect(() => {
    const maxScreenSize = window.screen.height >= window.screen.width
      ? window.screen.height
      : window.screen.width;
    if (maxScreenSize < 1000) {
      setDeviceType("Mobile")
    } else {
      setDeviceType("Desktop")
    }
  }, [])

  return (
<<<<<<< HEAD
    <>
    <SessionProvider>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <SignInForm/>
        <Component {...pageProps} />
      </ThemeProvider>
      </SessionProvider>
      <script
=======

    (Component && !loadScreenMounted)
      ?
      <>
        <ThemeProvider theme={darkTheme}>
          {deviceType && <NavBar deviceType={deviceType}/>}
          <Component {...pageProps} deviceType={deviceType} />
        </ThemeProvider>
        <script
>>>>>>> 9396280a05012c5e1eeacaffb9395b15f067cb27
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
      />
    </>
      :
      <LoadingScreen
        setLoadScreenMounted={setLoadScreenMounted}
        duration={durationLoadingScreen}
      />
  );
};

export default MyApp;
