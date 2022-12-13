import React, { type FC, type ReactElement, useState, FormEventHandler, useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import StatusBar from "./ProfilePage/StatusBar";
import { EmailAuthCredential, getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup } from 'firebase/auth';
import AppContext from "../AppContext";

const SignInForm: FC = (): ReactElement => {
  const auth = getAuth();
  const [authing, setAuthing] = useState(false);
  const value = useContext(AppContext);
  const { setUserId } = value;

  const signInWithGoogle = async () => {
      setAuthing(true);

      signInWithPopup(auth, new GoogleAuthProvider())
          .then((response) => {
              setUserId(response.user.uid)
          })
          .catch((error) => {
              console.log(error);
              setAuthing(false);
          });
  };

  // const signInWithEmailAndPassword = async () => {
  //   setAuthing(true);

  //   signInWithCredential(auth, new EmailAuthCredential())
  //         .then((response) => {
  //           console.log(response.user.uid)
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           setAuthing(false)
  //         })

  // }

  return (
    <div className="items-center mx-8 my-20 flexCenterDiv bg-darkGrey">
      <br />
      <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
      <br />
      <Button
        type="button"
        id="themeButton"
        className="font-heading"
        endIcon={<GoogleIcon />}
        onClick={() => signInWithGoogle()}
      >
        Sign in with
      </Button>
      <br />
      </h1>

      <Box
        sx={{
          mx: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <br />
        <Grid container>
          <Grid item xs sx={{ mx: 2 }}>
            <Typography color="secondary" variant="body2">
              <Link className="mb-5 text-m font-body2" href="/" id="link">
                {" "}
                Don&apos;t have an account? Sign up here.{" "}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignInForm;
