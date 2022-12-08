import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "../Components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mapLocationPicker.css";
import "../styles/compass.css";
import "../styles/loadingSpinner.css";
import "../styles/fade.css"
import { useState, useEffect } from "react";
import LoadingScreen from "../Components/LoadingScreen";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {

  const [dismount, setDismount] = useState<boolean>(false);


  // const [deviceType, setDeviceType] = useState<string | null>(null)
  // useEffect(() => {
  //   const maxScreenSize = window.screen.height >= window.screen.width ? window.screen.height : window.screen.width;
  //   // if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //   if (maxScreenSize < 1000) {
  //     console.log("mobile device");
  //     setDeviceType("Mobile")
  //   } else {
  //     console.log("not mobile device");
  //     setDeviceType("Desktop")
  //   }
  // }, [])

  return (

    (Component && dismount)
      ?
      <>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
          {/* {!deviceType ? <NavBar /> : <></>} */}
          <Component {...pageProps} />
        </ThemeProvider>
      </>
      :
      <LoadingScreen setDismount={setDismount} dismount={dismount}/>
  );
};

export default MyApp;
