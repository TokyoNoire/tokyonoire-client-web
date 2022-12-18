import React, { type FC, type ReactElement, useState, useContext } from "react";
import Logo from "../../../public/Logo_DarkTheme.svg";
import Link from "next/link";
import PublishIcon from "./../../../Assets/Icons/publishIcon-darkTheme.svg";
import SaveIcon from "./../../../Assets/Icons/saveIcon-darkTheme.svg";
import axios from "axios";
import { useRouter } from "next/router";
import FadeDiv from "../Helpers/FadeDiv";
import AppContext from "../../AppContext";

type menuItem = {
  title: string;
  url: string;
};

const menuItems: Array<menuItem> = [
  {
    title: "Explore",
    url: "/explore",
  },
  {
    title: "How To Play",
    url: "/how-to-play",
  },
  {
    title: "Profile",
    url: "/profile",
  },
];

const MenuDesktop = (): ReactElement => {
  const [show] = useState<boolean>(true);
  const value = useContext(AppContext);
  const { gameData } = value;

  const saveDraft = async () => {
    // gameData.isPublished = "false";
    await axios.patch(
      `https://tokyo-noire-server-development.herokuapp.com/editor/${gameData._id}`,
      gameData
    )
  }

  const publishGame = async () => {
    gameData.isPublished = true;
    await axios.patch(
      `https://tokyo-noire-server-development.herokuapp.com/editor/${gameData._id}`,
      gameData
    ).then(res => console.log(res))
    console.log('I ran')
  };

  return (
    <>
      <div className="flex items-center flex-grow h-20 max-w-52 gap-14">
        <Link href="/" title="Homepage" className="z-50 w-12">
          <Logo alt="logo menu button" className="logo" />
        </Link>
        {useRouter().pathname.includes("/editor/") && gameData && (
          <FadeDiv show={show}>
            <div
              className="flex gap-10 px-8 py-3 rounded-full"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <div className="cursor-pointer w-7" title={gameData.isPublished ? "Save" : "Save as Draft"}>
                <SaveIcon
                  onClick={saveDraft}
                ></SaveIcon>
              </div>
              <div className="cursor-pointer w-7" title="Publish">
                <PublishIcon
                  onClick={publishGame}
                ></PublishIcon>
              </div>
              <div className="cursor-pointer w-28" title="Publish">
                <Link href={`/editor`}>
                  Back to Editor
                </Link>

              </div>
            </div>
          </FadeDiv>
        )}
      </div>
      <ul className="flex gap-12 mr-10">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="text-xl menu-item">
            <Link href={menuItem.url}>{menuItem.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuDesktop;
