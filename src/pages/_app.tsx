import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "../Components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import "../styles/navbar.css"
import "../styles/mapLocationPicker.css"
import "../styles/compass.css"


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
