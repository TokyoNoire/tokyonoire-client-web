import React, { type FC, type ReactElement, useEffect, useRef, useContext } from "react";
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
import { AuthContext, useAuth } from '../AuthProvider'
import { EmailAuthCredential } from "firebase/auth";
import AppContext from "../../AppContext";
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";
import app from '../../../src/auth/firebase'
import { auth, db } from '../../../src/auth/firebase'

interface props {
  setAuthPanel: (string : string) => void
}

const SignUpForm = (props : props): ReactElement => {
  const { setAuthPanel } = props;
  const { signUp } = useAuth()
  const value = useContext(AppContext);
  const { setUserId, userId, username, setUsername } = value;
  const email = useRef<string>('');
  const password = useRef<string>('');
  const name = useRef<string>('');
  const formSubmitting = useRef<boolean>(false)
  const { signIn } = useAuth();

  // useEffect(() => {
  //   console.log(userId)
  //   if (userId) {
  //     console.log(userId)
  //   } 
  // }, [userId])

  return (
    <>
      <h1 className="self-center p-5 text-2xl text-center uppercase font-heading mx-20 my-20">
        Sign Up
      </h1>
      <br />

      <FormControl>
        <TextField
          id="name"
          required
          autoFocus
          label="Name"
          variant="filled"
          aria-describedby="name-input"
          placeholder="Name"
          onChange = {(e)=> {
            name.current = e.target.value
            console.log('🥵',name.current)
          } }
        />
        <FormHelperText id="password-helper">Your full name.</FormHelperText>
      </FormControl>
      <br />

      <FormControl>
        <TextField
          id="email"
          required
          variant="filled"
          label="Email"
          aria-describedby="email-address-input"
          placeholder="Email"
          onChange = {(e)=> email.current = e.target.value}
        />
        <FormHelperText id="password-helper">
          Your e-mail address.
        </FormHelperText>
      </FormControl>

      <br />
      <FormControl>
        <TextField
          id="outlined-password-input"
          required
          autoFocus
          label="Password"
          variant="filled"
          aria-describedby="password-input"
          placeholder="Password"
          onChange = {(e)=> password.current = e.target.value}
        />
        <FormHelperText id="password-helper">
          Password for your account.
        </FormHelperText>
      </FormControl>
      <br />
      <Button type="submit" id="themeButton" className="font-heading" onClick={() => {console.log(typeof email)}}>
        PUSH ME (test)
      </Button>
      <br></br>
      <Button type="submit" id="themeButton" className="font-heading" onClick={async () => {
          formSubmitting.current = true;
          try {
            await signUp(email.current, password.current)
            await signIn(email.current, password.current)
            .then((response) => {
              setUsername(name.current)
              setUserId(response.user.uid)
              addDoc(collection(db, "users"), {
                uid: response.user.uid,
                name: name.current,
                authProvider: "local",
                email: email.current
              })
            })}
            catch (error: any) {
              alert(error.message);
              console.log('signup error', error)
              formSubmitting.current = false
            }}}>
        Sign Up
      </Button>
      <br />
      {/* <Button
        type="submit"
        id="themeButton"
        className="font-heading"
        endIcon={<GoogleIcon />}
      >
        Sign up with
      </Button>
      <br />
      <Button
        type="submit"
        id="themeButton"
        className="font-heading"
        endIcon={<AppleIcon />}
      >
        Sign up with
      </Button> */}

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
      </Box>
      <Grid container>
          <Grid item xs sx={{ mx: 2 }}>
            <Typography color="secondary" variant="body2">
            <button className="mb-5 text-m text-center font-body2" id="link" onClick={() => setAuthPanel('signin')}>
                Already have an account? Login here.
              </button>
            </Typography>
          </Grid>
        </Grid>
        </>
  );
};

export default SignUpForm;
