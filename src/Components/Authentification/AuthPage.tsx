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
    <>
      {authPanel === "signin" ? (
        <div className="absolute z-50 items-center flexCenterDiv bg-darkGrey justify-center shadow-xl rounded-md">
          <br /><SignInForm setAuthPanel={setAuthPanel} /> </div>) 
          : (<div className="absolute z-50 items-center flexCenterDiv bg-darkGrey justify-center shadow-xl rounded-md">
          <br />
          <SignUpForm setAuthPanel={setAuthPanel} /> </div>)}
    </>
  )
};

export default AuthPage;
