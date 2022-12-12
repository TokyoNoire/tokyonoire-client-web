import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "../Components/Navigation/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mapLocationPicker.css";
import "../styles/compass.css";
import "../styles/loadingSpinner.css";
import "../styles/animations.css";
import { useState, useEffect, useRef } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import SignInForm from "../Components/SignInForm";
import { AuthProvider } from "../Components/AuthProvider";

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

    (Component && !loadScreenMounted)
      ?
      <>
      <AuthProvider>
        <SignInForm></SignInForm>
        <ThemeProvider theme={darkTheme}>
          {deviceType && <NavBar deviceType={deviceType} />}
          <Component {...pageProps} deviceType={deviceType} />
        </ThemeProvider>
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        />
        </AuthProvider>
      </>
      :
      <LoadingScreen
        setLoadScreenMounted={setLoadScreenMounted}
        duration={durationLoadingScreen}
      />
  );
};

export default MyApp;
