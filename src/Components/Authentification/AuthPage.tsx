import React, { type FC, type ReactElement, useState, FormEventHandler, useContext } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import AppContext from "../../AppContext";

const AuthPage: FC = (): ReactElement => {
  const value = useContext(AppContext);
  const { userId } = value;
  const [authPanel, setAuthPanel] = useState<string>('signin')

  // const showSignUp = () => {
  //   setSignInOrUp(false);
  // }

  // const showSignIn = () => {
  //   setSignInOrUp(true);
  // }

  return (
    <div>
    {authPanel === "signin" ? (<SignInForm setAuthPanel={setAuthPanel}/>) : (<SignUpForm setAuthPanel={setAuthPanel}/>)}
    </div>
    // <div className="absolute z-50 items-center flexCenterDiv bg-darkGrey justify-center h-50vh shadow-xl rounded-md">
    //   {signInOrUp ? (
    //     <>
    //   <br />
    //   <SignInForm/>
    //   <div className="absolute z-50">
        // <Grid container>
        //   <Grid item xs sx={{ mx: 2 }}>
        //     <Typography color="secondary" variant="body2">
        //       <button className="mb-5 text-m font-body2" id="link" onClick={() => showSignUp()}>
        //         Don&apos;t have an account? Sign up here.
        //       </button>
        //     </Typography>
        //   </Grid>
        // </Grid>
    //     </div>
    //     </>) : (
    //       <>
    //   <SignUpForm/>
      // <Grid container>
      //     <Grid item xs sx={{ mx: 2 }}>
      //       <Typography color="secondary" variant="body2">
      //       <button className="mb-5 text-m font-body2" id="link" onClick={() => showSignIn()}>
      //           Already have an account? Login here.
      //         </button>
      //       </Typography>
      //     </Grid>
      //   </Grid>
    //   </>)}
    //   </div>
  )
};

export default AuthPage;
