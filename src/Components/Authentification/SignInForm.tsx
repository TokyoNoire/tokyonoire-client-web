import React, { type FC, type ReactElement, useState, FormEventHandler, useContext, useRef } from "react";
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
import { getFirestore, query, getDocs, getDoc, collection, where, addDoc } from "firebase/firestore";
import app from '../../../src/auth/firebase'
import { auth, db } from '../../../src/auth/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import { match } from "assert";



interface props {
  setAuthPanel: (string: string) => void
}

const SignInForm = (props: props): ReactElement => {
  const { setAuthPanel } = props;
  const auth = getAuth();
  const [authing, setAuthing] = useState(false);
  const value = useContext(AppContext);
  const { userId, setUserId, setUsername } = value;
  const email = useRef<string>('');
  const password = useRef<string>('');
  const { signIn } = useAuth();
  const formSubmitting = useRef<boolean>(false);
  let userData: object;

  const signInWithGoogle = async () => {
    setAuthing(true);
    await signInWithPopup(auth, new GoogleAuthProvider())
      .then( async (response) => {
        await setUserId(response.user.uid)
        await setUsername(response.user.displayName)
        await addDoc(collection(db, "users"), {
          uid: response.user.uid,
          name: response.user.displayName,
          authProvider: "google",
          email: response.user.email,
        });
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
        // console.log(response.user.uid)
        // const db = getFirestore(app)
        // const q = query(collection(db, "users"), where("uid", "==", response.user.uid))
        // console.log('❤️',q)
        // const querySnapshot = query(collection(db, "users"));

        const users = collection(db, 'users')
        const matchedID = query(users, where("uid", "==", response.user.uid))
        console.log(matchedID)

        // var collectionReference = db.collection("users");
        // var query = users.where("name", "==", "John");
        // query.get().then(function (querySnapshot) {
        //   if (querySnapshot.empty) {
        //     console.log('no documents found');
        //   } else {
        //     // do something with the data
        //   }
        });


        //   async function getUids(email:string) {
        //     const db = getFirestore(app);
        //     const querySnapshot = collection(db, "users");
        //     console.log(querySnapshot)
        //     const uids = querySnapshot.docs.map((doc) => { return doc.id });
        //     return uids;
        // }




        // useCollection(query(collection(db, "users"), where("uid", "==", userId)))
        // // const q = query(collection(db, "users").where("uid", "==", userId).get());
        // collection(db, "users")
        // // const docs = getDocs(q);
        // // const result = docs.then((res) => {
        // //   console.log(res)
        // // })
        // // console.log(result)
        // setUsername()
      // })
      // .catch((error) => {
      //   console.error(error);
      //   alert(error.message);
      //   console.log(error);
      //   setAuthing(false)
      // })
  }

  return (
    <>
      <h1 className="self-center p-5 text-2xl text-center uppercase font-heading mx-20 my-20">
        <br />
        <FormControl>
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
            onChange={(e) => password.current = e.target.value}
          />
          <FormHelperText id="password-helper">
            Password for your account.
          </FormHelperText>

        </FormControl>
        <br></br>
        <br></br>
        <Button
          type="button"
          id="themeButton"
          className="font-heading"
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
        </Button>
        <br></br>
        <br></br>
        <Button
          type="button"
          id="themeButton"
          className="font-heading"
          endIcon={<GoogleIcon />}
          onClick={() => signInWithGoogle()}>
          Sign in with
        </Button>
        <br />
        <br></br>
        <Button type="submit" id="themeButton" className="font-heading" onClick={() => { console.log(password) }}>
          PUSH ME (test)
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
            <button className="mb-5 text-m p-5 text-center font-body2" id="link" onClick={() => setAuthPanel('signup')}>
              Don&apos;t have an account? Sign up here.
            </button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SignInForm;