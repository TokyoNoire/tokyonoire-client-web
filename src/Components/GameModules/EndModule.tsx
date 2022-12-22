import React, { type ReactElement, useState, useContext, useEffect, useRef } from "react";
import AppContext from "../../AppContext";
import axios from "axios";
import { useRouter } from "next/router";
import { type GameModule } from "../../types/global";
import { Modal } from "@mui/material";
import AuthPopUp from "../Authentification/AuthPopUp";
import ClearIcon from "@mui/icons-material/Clear";

interface props {
  gameObject: GameModule;
}

const EndModule = (props: props): ReactElement => {
  const value = useContext(AppContext);
  const { gameObject } = props;
  const router = useRouter();
  const [haspopup, setHaspopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => { setOpenModal(false) }
  const handleOpenModal = () => { setOpenModal(true) }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { sessionTable, sessionGameIndex, userId, username, isRegistered } =
    value;

  // const completeSession = async () => {
  //   await axios.patch(
  //     `https://tokyo-noire-server-development.herokuapp.com/updateSession/${sessionTable.gameId}/${userId}`,
  //     {
  //       isCompleted: true,
  //     }
  //   );
  // };

  useEffect(() => {
    if (userId && userId.length === 28 && open === true) {
      router.push('/')
    }
  }, [userId])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    sessionGameIndex.current = 0;
    router.push("/");
  };

  return (
    <>
      <section className="w-full flexCenterDiv">
        <h1 className="mb-12 text-4xl text-center uppercase font-heading">
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
          <p className="px-5 text-lg font-body1">{gameObject.description}</p>
        )}

        <hr className="self-center w-10/12 mt-10" />
      </section>

      {open ? <AuthPopUp setClose={handleClose} /> : <></>}
      <section className="items-center px-5 flexCenterDiv">
        <h1 className="mt-20 mb-10 text-3xl uppercase font-heading">
          Mystery Complete
        </h1>
        {/* <table className="w-full">
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
        </table> */}

        <button
          onClick={(e) => {
            console.log(isRegistered);
            if (isRegistered === false && haspopup === false) {
              handleOpenModal();
              setHaspopup(true);
            }
            if (isRegistered === true || haspopup === true) {
              handleClick(e);
              // completeSession();
            }
          }}
          id="themeButton"
          className="self-center w-1/3 mt-16 mb-14 font-heading"
          type="button"
        >
          finish
        </button>
      </section>
      {openModal && (
        <div className="flex justify-center w-full">

          <div className="fixed z-50 items-center justify-center w-11/12 transform rounded-md shadow-xl top-1/3 flexCenterDiv bg-darkGrey">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-black border-2 rounded-full right-3 top-3">
              <ClearIcon
                className="hover:shadow-indigo-500/40"
                style={{ transform: "scale(1.2)" }}
                onClick={handleCloseModal}
              />
            </div>
            <h1 className="p-5 text-4xl uppercase font-heading">Before You Go!</h1>

            <p className="px-5 text-center font-body1">{`Detective: why not create an account to record today's achievements? If you already have an account with us, you can login now to add this closed case to your records.`}</p>

            <button
              id="themeButton"
              className="my-5 uppercase font-heading"
              onClick={() => { handleCloseModal(); handleOpen() }}
            >Sign In</button>
          </div>
        </div>
      )}
    </>
  );
};

export default EndModule;
