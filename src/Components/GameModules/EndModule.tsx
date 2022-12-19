import React, { type ReactElement, useContext } from "react";
import AppContext from "../../AppContext";
import axios from 'axios'
import { useRouter } from "next/router";
import { type GameModule } from "../../types/global";

interface props {
  gameObject: GameModule;
}

const EndModule = (props: props): ReactElement => {
  const { gameObject } = props;
  const router = useRouter();
  const value = useContext(AppContext)
  const {sessionTable,  sessionGameIndex, userId,} = value

  const completeSession = async () => {
    await axios.patch(`https://tokyo-noire-server-development.herokuapp.com/updateSession/${sessionTable.gameId}/${userId}`,{
      isCompleted: true,
    })
  }
  

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

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

        {gameObject.description &&
          <p className="px-5 font-body1">
            {gameObject.description}
          </p>
        }

        <hr
          className="self-center w-10/12 mt-10"
        />
      </section>

      <section className="flexCenterDiv items-center px-5">
        <h1 className="mt-20 mb-10 text-3xl uppercase font-heading">
          Mystery Complete
        </h1>
        <table className="w-full">
          <tbody>
            <tr className="bg-white border-b">
              <th scope="row" className="text-left text-md font-body2 uppercase">
                Distance Travelled
              </th>
              <td className="text-right font-body2 py-4">
                Lots of Distance
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th scope="row" className="text-left text-md font-body2 uppercase">
                Time Completed
              </th>
              <td className="text-right font-body2 py-4">
                Lots of Time
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th scope="row" className="text-left text-md font-body2 uppercase">
                Points Earned
              </th>
              <td className="text-right font-body2 py-4">
                Lots of Points
              </td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={(e) => {
            handleClick(e);
            completeSession()
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
