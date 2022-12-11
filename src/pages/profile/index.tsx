import { type NextPage } from "next";
import GameList from "../../Components/ProfilePage/GameList";
import StatusBar from "../../Components/ProfilePage/StatusBar";
// import Link from "next/link";

const Profile: NextPage = () => {
  return (
    <>
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-3xl uppercase font-heading">Profile Page</h1>
      <StatusBar/>
      <GameList/>
      
    </main>
   
    </>
  );
};

export default Profile;
