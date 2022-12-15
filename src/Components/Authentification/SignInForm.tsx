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
import GoogleIcon from "@mui/icons-material/Google";
import { EmailAuthCredential, getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup } from 'firebase/auth';
import AppContext from "../../AppContext";
import { useAuth } from "../AuthProvider";
import SignUpForm from "./SignUpForm";

interface props {
  setAuthPanel: (string : string) => void
}

const SignInForm = (props : props): ReactElement => {
  const { setAuthPanel } = props;
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

  const signInWithEmailAndPassword = async () => {
    setAuthing(true);

    signInWithCredential(auth, new EmailAuthCredential())
          .then((response) => {
            console.log(response.user.uid)
          })
          .catch((error) => {
            console.log(error);
            setAuthing(false)
          })
  }

  return (
    <>
      <h1 className="self-center p-5 text-2xl text-center uppercase font-heading mx-20 my-20">
      <br />
      {/* <FormControl>
        <TextField
          id="email"
          required
          variant="filled"
          label="Email"
          aria-describedby="email-address-input"
          value={}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormHelperText id="password-helper">
          Your e-mail address.
        </FormHelperText>
      </FormControl>

      <br/>
      <FormControl>
        <TextField
          id="outlined-password-input"
          required
          autoFocus
          label="Password"
          variant="filled"
          aria-describedby="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormHelperText id="password-helper">
          Password for your account.
        </FormHelperText>
      </FormControl> */}
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
      </Box>
      <Grid container>
          <Grid item xs sx={{ mx: 2 }}>
            <Typography color="secondary" variant="body2">
              <button className="mb-5 text-m text-center font-body2" id="link" onClick={() => setAuthPanel('signup')}>
                Don&apos;t have an account? Sign up here.
              </button>
            </Typography>
          </Grid>
        </Grid>
        </>
  );
};

export default SignInForm;