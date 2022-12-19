import React, { type FC, type ReactElement, useState, FormEventHandler, useContext } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import AppContext from "../../AppContext";

const AuthPopUp: FC = (): ReactElement => {
  const value = useContext(AppContext);
  const { userId } = value;
  const [authPanel, setAuthPanel] = useState<string>('signin')
  const [open, setOpen] = useState<string>('false')


  return (
    <>
      <div className="absolute mt-36 z-[99] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 items-center flexCenterDiv bg-darkGrey justify-center shadow-xl rounded-md">
        {authPanel === "signin"
          ? (<SignInForm setAuthPanel={setAuthPanel} />)
          : (<SignUpForm setAuthPanel={setAuthPanel} />)}
      </div>
    </>
  )
};

export default AuthPopUp;
