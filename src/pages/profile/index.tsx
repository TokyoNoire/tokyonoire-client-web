import React, {
  type ReactElement,
  useState, useContext
} from "react";
import StatusBar from "../../Components/ProfilePage/StatusBar";
import AppContext from "../../AppContext";
import { useRouter } from "next/router";


const Profile = (): ReactElement => {
  const [show, isShowing] = useState<boolean>(true);
  const value = useContext(AppContext);
  const { userId } = value;
  const router = useRouter()

  if (!userId) {
console.log("hey bruv 💀")
  }
  return (
    <>
      <main className="items-center justify-center mb-5 mt-36">
        <h1 className="mb-5 text-3xl text-center uppercase font-heading">
          Profile Page
        </h1>
        <StatusBar />
      </main>
    </>
  );
};

export default Profile;