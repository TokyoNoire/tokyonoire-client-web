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
<<<<<<< HEAD
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
          <li className="mx-3 mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg bg-darkGrey font-heading"
              aria-current="page"
              id="themeButton"
              onClick={() => isShowing(true)}
            >
              Authored
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg bg-darkGrey font-heading"
              id="themeButton"
              onClick={() => isShowing(false)}
            >
              Case Status
            </a>
          </li>
        </ul>

        {show ? <GameListCompleted /> : <GameListUncompleted />}
=======
>>>>>>> 14c870939f119e6fc7e4b6b9ac6b0d80180c9084
      </main>
    </>
  );
};

export default Profile;