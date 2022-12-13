import React, { type FC, type ReactElement, useState, FormEventHandler } from "react";
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

const SignUpForm: FC = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userInfo, setUserInfo] = useState({ email: "", password: "", name: "" });

  interface SignUpFormValues {
    email: string
    password: string
    repeatPassword: string
  }

  return (
    <div className="items-center mx-8 my-20 flexCenterDiv bg-darkGrey">
      <br />
      <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
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
          value={userInfo.name}
          onChange={({ target }) =>
          setUserInfo({ ...userInfo, name: target.value })
        }
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
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
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
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
        />
        <FormHelperText id="password-helper">
          Password for your account.
        </FormHelperText>
      </FormControl>
      <br />
      <Button type="submit" id="themeButton" className="font-heading">
        Sign Up
      </Button>
      <br />
      <Button
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
      </Button>

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
                Already have an account? Login here.{" "}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignUpForm;
