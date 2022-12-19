import React, { type ReactElement, useRef, useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import { AuthContext, useAuth } from '../AuthProvider'
import AppContext from "../../AppContext";
import {  getDocs, collection, where, addDoc, } from "firebase/firestore";
import { db } from '../../../src/auth/firebase'

interface props {
  setAuthPanel: (string: string) => void
}

const SignUpForm = (props: props): ReactElement => {
  const { setAuthPanel } = props;
  const { signUp } = useAuth()
  const value = useContext(AppContext);
  const { setUserId, userId, username, setUsername, setLocalUserId, setLocalUsername } = value;
  const email = useRef<string>('');
  const password = useRef<string>('');
  const name = useRef<string>('');
  const formSubmitting = useRef<boolean>(false)
  const { signIn } = useAuth();

  return (
    <>
      <h1 className="self-center p-5 mt-10 text-2xl text-center uppercase font-heading">
        Sign Up
      </h1>
      <br />

      <FormControl className="self-center w-3/4">
        <TextField
          id="name"
          required
          autoFocus
          label="Name"
          variant="filled"
          aria-describedby="name-input"
          placeholder="Name"
          onChange={(e) => {
            name.current = e.target.value
          }}
        />
        <FormHelperText id="password-helper">Your full name.</FormHelperText>
      </FormControl>
      <br />

      <FormControl className="self-center w-3/4">
        <TextField
          id="email"
          required
          variant="filled"
          label="Email"
          aria-describedby="email-address-input"
          placeholder="Email"
          onChange={(e) => email.current = e.target.value}
        />
        <FormHelperText id="password-helper">
          Your e-mail address.
        </FormHelperText>
      </FormControl>

      <br />
      <FormControl className="self-center w-3/4">
        <TextField
          id="outlined-password-input"
          required
          autoFocus
          label="Password"
          variant="filled"
          type= "password"
          aria-describedby="password-input"
          placeholder="Password"
          onChange={(e) => password.current = e.target.value}
        />
        <FormHelperText id="password-helper">
          Password for your account.
        </FormHelperText>
      </FormControl>
      <br />
      <br></br>
      <button type="submit" id="themeButton"  className="self-center w-1/2 font-heading" onClick={async () => {
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
              setLocalUserId(response.user.uid)
              setLocalUsername(response.user.displayName)
            })
        }
        catch (error: any) {
          alert(error.message);
          console.log('signup error', error)
          formSubmitting.current = false
        }
      }}>
        Sign Up
      </button>


            <button className="p-5 mb-5 text-sm text-center text-m font-body2" id="link" onClick={() => setAuthPanel('signin')}>
              Already have an account? 
              <p className="font-semibold underline">Login here.</p>
            </button>
        
   </>
  );
};

export default SignUpForm;
