import React, {
  type ReactElement,
  useState,
} from "react";
import StatusBar from "../../Components/ProfilePage/StatusBar";


const Profile = (): ReactElement =>  {
  const [show, isShowing] = useState<boolean>(true);
  
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