import React, { type ReactElement, useContext } from "react";
import AppContext from "../../AppContext";
import axios from "axios";
import { useRouter } from "next/router";
import { type GameModule } from "../../types/global";
import { Modal } from "@mui/material";
import AuthPopUp from "../Authentification/AuthPopUp";

interface props {
  gameObject: GameModule;
}

const EndModule = (props: props): ReactElement => {
  const value = useContext(AppContext);
  const { gameObject } = props;
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { sessionTable, sessionGameIndex, userId, username } = value;

  const completeSession = async () => {
    await axios.patch(
      `https://tokyo-noire-server-development.herokuapp.com/updateSession/${sessionTable.gameId}/${userId}`,
      {
        isCompleted: true,
      }
    );
  };

  const handleClick = (e: React.MouseEvent) => {
     if (userId && username) {e.preventDefault();
      router.push("/");}
  };

  console.log(userId);
  return (
    <>
      <section className="w-full flexCenterDiv">
        <h1 className="mb-12 text-3xl text-center uppercase font-heading">
          {gameObject.title}
        </h1>

        {gameObject.imageURL && (
          <img
            src={gameObject.imageURL}
            alt="Image for narrative module"
            className="w-full mb-8"
          />
        )}

        {gameObject.description && (
          <p className="px-5 font-body1">{gameObject.description}</p>
        )}

        <hr className="self-center w-10/12 mt-10" />
      </section>

      {{open}?  <AuthPopUp/>: <></>}
      <section className="items-center px-5 flexCenterDiv">
        <h1 className="mt-20 mb-10 text-3xl uppercase font-heading">
          Mystery Complete
        </h1>
        <table className="w-full">
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="text-left uppercase text-md font-body2"
              >
                Distance Travelled
              </th>
              <td className="py-4 text-right font-body2">Lots of Distance</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="text-left uppercase text-md font-body2"
              >
                Time Completed
              </th>
              <td className="py-4 text-right font-body2">Lots of Time</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="text-left uppercase text-md font-body2"
              >
                Points Earned
              </th>
              <td className="py-4 text-right font-body2">Lots of Points</td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={(e) => {
            handleClick(e);
            // if (userId) {
            //   handleOpen();
            // } else {
            // handleClick(e);
            //   completeSession();
            // }
          }}
          id="themeButton"
          className="self-center w-1/3 mt-16 mb-14 font-heading"
          type="button"
        >
          finish
        </button>
      </section>
    </>
  );
};

export default EndModule;
