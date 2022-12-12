// import { type NextPage } from "next";
import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import GameListCompleted from "../../Components/ProfilePage/GameListCompleted";
import GameListUncompleted from "../../Components/ProfilePage/GameListUncompleted";
import StatusBar from "../../Components/ProfilePage/StatusBar";
// import Link from "next/link";


const Profile = (): ReactElement =>  {
  const [show, isShowing] = useState<boolean>(true);
  
  return (
    <>
      <main className="items-center justify-center mb-5 mt-36">
        <h1 className="mb-5 text-3xl text-center uppercase font-heading">
          Profile Page
        </h1>
        <StatusBar />
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
          <li className="mx-3 mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg bg-darkGrey font-heading"
              aria-current="page"
              id = "themeButton"
              onClick = {()=>isShowing(true)}
            >
              Completed
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg bg-darkGrey font-heading"
              id = "themeButton"
              onClick = {()=>isShowing(false)}
            >
              Ongoing
            </a>
          </li>
        </ul>

        {show? <GameListCompleted /> : <GameListUncompleted />}
      </main>
    </>
  );
};

export default Profile;