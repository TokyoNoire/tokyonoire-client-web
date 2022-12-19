import React, { type FC, type ReactElement, useState, FormEventHandler, useContext } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import AppContext from "../../AppContext";
import ClearIcon from "@mui/icons-material/Clear";

interface props {
  setClose: () => void;
}

const AuthPopUp = (props: props): ReactElement => {
  const { setClose } = props;
  const value = useContext(AppContext);
  const { userId } = value;
  const [authPanel, setAuthPanel] = useState<string>('signin')


  return (
    <>
      <div className="absolute z-50 items-center justify-center mt-10 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-xl top-1/2 left-1/2 sm:w-10/12 lg:w-4/12 md:w-5/12 flexCenterDiv bg-darkGrey">
      <div className="absolute flex items-center justify-center w-8 h-8 bg-black border-2 rounded-full right-3 top-3">
                <ClearIcon
                    className="hover:shadow-indigo-500/40"
                    style={{ transform: "scale(1.2)" }}
                    onClick={setClose}
                />
            </div>
        {authPanel === "signin"
          ? (<SignInForm setAuthPanel={setAuthPanel} />)
          : (<SignUpForm setAuthPanel={setAuthPanel} />)}
      </div>
    </>
  )
};

export default AuthPopUp;
