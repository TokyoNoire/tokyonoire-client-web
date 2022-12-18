import React, { type FC, type ReactElement, useState, FormEventHandler, useContext } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import AppContext from "../../AppContext";

const AuthPopUp: FC = (): ReactElement => {
  const value = useContext(AppContext);
  const { userId } = value;
  const [authPanel, setAuthPanel] = useState<string>('signin')


  return (
    <>
      <div className="absolute z-[99] h-2/3 items-center flexCenterDiv bg-darkGrey justify-center shadow-xl rounded-md">
        {authPanel === "signin"
          ? (<SignInForm setAuthPanel={setAuthPanel} />)
          : (<SignUpForm setAuthPanel={setAuthPanel} />)}
      </div>
    </>
  )
};

export default AuthPopUp;
