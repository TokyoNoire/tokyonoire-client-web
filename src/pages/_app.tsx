import { useState, useEffect, useRef } from "react";
import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Script from "next/script";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mapLocationPicker.css";
import "../styles/compass.css";
import "../styles/loadingSpinner.css";
import "../styles/animations.css";
import AppContext from "../AppContext";
import LoadingScreen from "../Components/LoadingScreen";
import SignInForm from "../Components/Authentification/SignInForm";
import { AuthProvider } from "../Components/AuthProvider";
import NavBar from "../Components/Navigation/NavBar";
import MockGame from "../Components/Editor/Helpers/MockGame";
import { saveGameInfo, GameModule } from "../types/global";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [loadScreenMounted, setLoadScreenMounted] = useState<boolean>(true);
  const [durationLoadingScreen] = useState<number>(2000);
  const [deviceType, setDeviceType] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [gameData, setGameData] = useState<saveGameInfo | null>(null);
  const [gameModules, setGameModules] = useState<GameModule[]>();
  const hasMounted = useRef<boolean>(false);
  const [activeModule, setActiveModule] = useState<GameModule | null>(null);
  const [gameInfoModule, setGameInfoModule] = useState<saveGameInfo | null>(
    null
  );

  const [currentGame, setCurrentGame] = useLocalStorage(
    "currentGameData",
    gameData
  );

  const getTest = async () => {
    await axios
      .get(
        "http://localhost:2000/editor/a5e5629a-ee52-4142-8a35-7f952e71033l"
      )
      .then((response) => {
        setGameData(response.data[0]);
        setGameModules(response.data[0].gameModules);
        setGameInfoModule(response.data[0]);
      });
  };

  useEffect(() => {
    if (!hasMounted.current) {
      getTest();
      hasMounted.current = true;
    }
  }, [hasMounted]);

  useEffect(() => {
    if (gameData) {
      const newGameData = gameData;
      newGameData.gameModules = gameModules;
      setGameData(newGameData);
      console.log(gameModules);
      console.log("gameData has been updated");
    }
  }, [gameModules]);

  useEffect(() => {
    if (gameData && gameInfoModule) {
      let newGameData = gameData;
      newGameData = gameInfoModule;
      setGameData(newGameData);
      // console.log(gameData);
      console.log("gameData has been updated");
    }
  }, [gameInfoModule]);

  useEffect(() => {
    const maxScreenSize =
      window.screen.height >= window.screen.width
        ? window.screen.height
        : window.screen.width;
    if (maxScreenSize < 1000) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        deviceType: deviceType,
        gameData: gameData,
        setGameData: setGameData,
        gameModules: gameModules,
        setGameModules: setGameModules,
        activeModule: activeModule,
        setActiveModule: setActiveModule,
        setCurrentGame: setCurrentGame,
        userId: userId,
        setUserId: setUserId,
        setGameInfoModule: setGameInfoModule,
        gameInfoModule: gameInfoModule,
      }}
    >
      <AuthProvider>
        <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        />

        {Component && !loadScreenMounted ? (
          <ThemeProvider theme={darkTheme}>
            {deviceType && <NavBar deviceType={deviceType} />}
            <Component {...pageProps} deviceType={deviceType} />
          </ThemeProvider>
        ) : (
          <LoadingScreen
            setLoadScreenMounted={setLoadScreenMounted}
            duration={durationLoadingScreen}
          />
        )}
      </AuthProvider>
    </AppContext.Provider>
  );
};

export default MyApp;
