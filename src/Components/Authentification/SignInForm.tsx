import React, { type FC, type ReactElement, useState, useContext, useRef, useEffect } from "react";
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
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import AppContext from "../../AppContext";
import { useAuth } from "../AuthProvider";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { auth, db } from '../../../src/auth/firebase'
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";

interface props {
  setAuthPanel: (string: string) => void
}

const SignInForm = (props: props): ReactElement => {
  const { setAuthPanel } = props;
  const auth = getAuth();
  const [authing, setAuthing] = useState(false);
  const value = useContext(AppContext);
  const { setUserId, setUsername, username, userId, setLocalUserId, setLocalUsername } = value;
  const email = useRef<string>('');
  const password = useRef<string>('');
  const { signIn } = useAuth();
  const formSubmitting = useRef<boolean>(false);

  const signInWithGoogle = async () => {
    setAuthing(true);
    await signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (response) => {
        await setUserId(response.user.uid)
        await setUsername(response.user.displayName)
        const dbQuery = query(collection(db, "users"), where("uid", "==", response.user.uid));
        const doc = getDocs(dbQuery)
        doc.then((res) => {
          if (res.empty) {
            addDoc(collection(db, "users"), {
              uid: response.user.uid,
              name: response.user.displayName,
              authProvider: "google",
              email: response.user.email,
            });
          } else {
            res.forEach((doc) => {
              console.log(doc.data(), '🥭')
              const userDisplayName = doc.data()
              setUsername(userDisplayName.name)
            })
          }
        }
        )
        setLocalUserId(response.user.uid)
        setLocalUsername(response.user.displayName)
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
        setAuthing(false)
      });
  };

  const signInTrigger = async () => {
    setAuthing(true);

    await signIn(email.current, password.current)
      .then((response) => {
        setUserId(response.user.uid)
        const dbQuery = query(collection(db, "users"), where("uid", "==", response.user.uid));
        const doc = getDocs(dbQuery)
        doc.then((res) => {
          res.forEach((doc) => {
            const userDisplayName = doc.data()
            setUsername(userDisplayName.name)
          })
        })
        setLocalUserId(response.user.uid)
        setLocalUsername(response.user.displayName)
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
        setAuthing(false)
      });
  }

  return (
  
    <div className="h-auto mt-20 rounded-lg flexCenterDiv bg-darkGrey">
      <h1 className="self-center p-5 mx-48 mt-10 text-2xl text-center uppercase font-heading"> 
      Sign in</h1>
        <br />
        <FormControl  className="self-center w-3/4">
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
            type="password"
            variant="filled"
            aria-describedby="password-input"
            placeholder="Password"
            onChange={(e) => password.current = e.target.value}
          />
          <FormHelperText id="password-helper">
            Password for your account.
          </FormHelperText>

        </FormControl>
        <br></br>
        <br></br>
        <button
          type="button"
          id="themeButton"
          className="self-center w-1/2 font-heading"
          onClick={async () => {
            formSubmitting.current = true;
            try {
              await signInTrigger()
              console.log()
            }
            catch (error) {
              console.log('signup error', error)
              formSubmitting.current = false
            }
          }}>
          Sign in
        </button>
        <br></br>
        <br></br>
        <button
          className="self-center w-1/2 font-heading"
          type="button"
          id="themeButton"
          onClick={() => signInWithGoogle()}>
          Sign in with <GoogleIcon fontSize="small"/>
        </button>
        <br />
  
            <button className="p-5 mb-5 text-sm text-center text-m font-body2" id="link" onClick={() => setAuthPanel('signup')}>
              Don&apos;t have an account?
              <p className="font-semibold underline">Sign up here.</p>
            </button>
          
      </div>
  
  );
};

export default SignInForm;