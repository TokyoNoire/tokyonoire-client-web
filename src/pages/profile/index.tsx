import { type NextPage } from "next";
import ListOfPublicGames from "../../Components/ListOfPublicGames";
import GameList from "../../Components/ProfilePage/GameList";
import StatusBar from "../../Components/ProfilePage/StatusBar";
// import Link from "next/link";

const Profile: NextPage = () => {
  return (
    <>
    <main className="items-center justify-center mb-5 mt-36">
      <h1 className="mb-5 text-3xl text-center uppercase font-heading">Profile Page</h1>
      <StatusBar/>
      <GameList/>
      <ListOfPublicGames/>
    </main>
    </>
  );
};

export default Profile;
