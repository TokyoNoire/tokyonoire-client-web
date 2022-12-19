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
    await axios.patch(`http://localhost:2000/updateSession/${sessionTable.gameId}/${userId}`,{
      isCompleted: true,
    })
  }
  

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div className="self-center w-full rounded-lg flexCenterDiv shadow-inset1">
        <div className="self-center mb-5 flexCenterDiv">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            {gameObject.title}
          </h1>
          <div className="self-center w-10/12 m-4 flexCenterDiv">
            {gameObject.imageURL ? (
              <img
                src={gameObject.imageURL}
                alt="End Module Image"
                className="rounded-lg"
              />
            ) : (
              ""
            )}
          </div>
          <p className="px-6 mt-2 text-center font-body1">{gameObject.description}</p>
        </div>
      </div>

      <div className="self-center flexCenterDiv">
        <h1 className="self-center py-20 text-2xl uppercase font-heading">
          Mystery Complete
        </h1>
        <table>
        <tbody>
            <tr className="self-center w-full bg-white border-b">
                <th scope="row" className="text-lg font-heading">
                Distance Travelled
                </th>
                <td className="px-6 py-4 text-right font-body2">
                    Lots of Distance
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="text-lg font-heading">
                Time Completed
                </th>
                <td className="px-6 py-4 text-right font-body2">
                    Lots of Time
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="text-lg font-heading">
                Points Earned
                </th>
                <td className="px-6 py-4 text-right font-body2">
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
          className="self-center w-1/3 mt-20 mb-10 font-heading"
          type="button"
        >
          finish
        </button>
      </div>
    </>
  );
};

export default EndModule;
