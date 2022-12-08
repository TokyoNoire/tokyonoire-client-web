import React, { type FC, type ReactElement, useState } from "react";
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

const SignInForm: FC = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  return (
    <div className="items-center mx-8 my-20 flexCenterDiv bg-darkGrey">
      <br />
      <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
        Sign In
      </h1>
      <br />

      <FormControl>
        <TextField
          id="email"
          required
          variant="filled"
          label="Email"
          aria-describedby="email-address-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormHelperText id="password-helper">
          Password for your account.
        </FormHelperText>
      </FormControl>
      <br />
      <Button type="submit" id="themeButton" className="font-heading">
        Sign In
      </Button>
      <br />
      <Button
        type="submit"
        id="themeButton"
        className="font-heading"
        endIcon={<GoogleIcon />}
      >
        Sign in with
      </Button>
      <br />
      <Button
        type="submit"
        id="themeButton"
        className="font-heading"
        endIcon={<AppleIcon />}
      >
        Sign in with
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
                Don&apos;t have an account? Sign in here.{" "}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignInForm;
