import { type NextPage } from "next";
import GameList from "../../Components/ProfilePage/GameList";
import StatusBar from "../../Components/ProfilePage/StatusBar";

const Profile: NextPage = () => {
  return (
    <>
      <main className="items-center justify-center mb-5 mt-36">
        <h1 className="mb-5 text-3xl text-center uppercase font-heading">
          Profile Page
        </h1>
        <StatusBar />
        <GameList />
      </main>
    </>
  );
};

export default Profile;