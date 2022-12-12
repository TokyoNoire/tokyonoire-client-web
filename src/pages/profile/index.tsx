import { type NextPage } from "next";
import GameListCompleted from "../../Components/ProfilePage/GameListCompleted";
import StatusBar from "../../Components/ProfilePage/StatusBar";
// import Link from "next/link";

const Profile: NextPage = () => {
  return (
    <>
      <main className="items-center justify-center mb-5 mt-36">
        <h1 className="mb-5 text-3xl text-center uppercase font-heading">
          Profile Page
        </h1>
        <StatusBar />
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
              aria-current="page"
            >
              Tab 1
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Tab 2
            </a>
          </li>
        </ul>
        <GameListCompleted />
      </main>
    </>
  );
};

export default Profile;
