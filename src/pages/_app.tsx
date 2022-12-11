import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "../Components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mapLocationPicker.css";
import "../styles/compass.css";
import SignInForm from "../Components/SignInForm";
import { SessionProvider } from "next-auth/react";
import AuthRoute from "../Components/AuthRoute";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
    <SessionProvider>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <SignInForm/>
        <Component {...pageProps} />
      </ThemeProvider>
      </SessionProvider>
      <script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
      />
    </>
  );
};

export default MyApp;
