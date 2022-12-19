import { useState, useEffect, useRef, useCallback } from "react";
import { type AppType } from "next/dist/shared/lib/utils";
import { v4 as uuidv4 } from 'uuid';
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
import { saveGameInfo, GameModule, SessionTable } from "../types/global";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
// import Geolocation from "../Components/GameModules/Helpers/Geolocation";
import Gyroscope from "../Components/GameModules/Helpers/Gyroscope";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [loadScreenMounted, setLoadScreenMounted] = useState<boolean>(true);
  const [durationLoadingScreen] = useState<number>(2000);
  const [deviceType, setDeviceType] = useLocalStorage<string | null>("deviceType", null);
  const [userId, setUserId] = useState<string>(uuidv4());
  const [geolocationAccess, setGeolocationAccess] = useState<boolean>(false);
  const [gyroscopeAccess, setGyroscopeAccess] = useState<boolean>(false);
  const [localUserId, setLocalUserId] = useLocalStorage<string | null>("userId", null)
  const [localUsername, setLocalUsername] = useLocalStorage<string | null>("username", null)
  const [username, setUsername] = useState<string>('');
  const [gameData, setGameData] = useState<saveGameInfo | null>(null);
  const [gameModules, setGameModules] = useState<GameModule[]>();
  const [activeModule, setActiveModule] = useState<GameModule | null>(null);
  const [isRegistered, setIsRegistered] = useLocalStorage<boolean>('isRegistered', false)
  const [gameInfoModule, setGameInfoModule] = useState<saveGameInfo | null>(null);
  const [currentCoords, setCurrentCoords] = useState<number[] | null>(null);
  const [acquiredPermissions, setAcquiredPermissions] = useLocalStorage<boolean | null>("acquiredPermissions", false);

  const sessionGameIndex = useRef(0);
  const [sessionTable, setSessionTable] = useLocalStorage<SessionTable | null>("sessionTable", null);

  useEffect(() => {
    setLocalUserId(userId)
  }, [userId])

  useEffect(() => {
    if (acquiredPermissions && deviceType === "Mobile") {
      const interval = setInterval(() => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            setCurrentCoords([position.coords.longitude, position.coords.latitude]);
          });
        }
        else console.error('geolocation unavailable')
      }, 1000);

      return () => {
        clearInterval(interval)
      }
    }
  }, [acquiredPermissions])


  useEffect(() => {
    if (localUserId) { setUserId(localUserId) }
    if (localUsername) { setUsername(localUsername) }
  }, [])

  const [currentGame, setCurrentGame] = useLocalStorage(
    "currentGameData",
    gameData
  );

  useEffect(() => {
    if (gameData) {
      const newGameData = gameData;
      newGameData.gameModules = gameModules;
      setGameData(newGameData);
    }
  }, [gameModules]);

  useEffect(() => {
    if (gameData && gameInfoModule) {
      let newGameData = gameData;
      newGameData = gameInfoModule;
      setGameData(newGameData);
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
        localUserId: localUserId,
        setLocalUserId: setLocalUserId,
        geolocationAccess: geolocationAccess,
        setGeolocationAccess: setGeolocationAccess,
        gyroscopeAccess: gyroscopeAccess,
        setGyroscopeAccess: setGyroscopeAccess,
        username: username,
        setUsername: setUsername,
        localUsername: localUsername,
        setLocalUsername: setLocalUsername,
        setGameInfoModule: setGameInfoModule,
        gameInfoModule: gameInfoModule,
        loadScreenMounted: loadScreenMounted,
        setCurrentCoords: setCurrentCoords,
        currentCoords: currentCoords,
        // geolocationPermission: geolocationPermission,
        // setGeolocationPermission: setGeolocationPermission,
        acquiredPermissions: acquiredPermissions,
        setAcquiredPermissions: setAcquiredPermissions,
        sessionTable: sessionTable,
        setSessionTable: setSessionTable,
        isRegistered: isRegistered,
        setIsRegistered: setIsRegistered,
        sessionGameIndex: sessionGameIndex
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