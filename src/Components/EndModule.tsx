import React, { type ReactElement } from "react";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { GameModule } from "../pages/game/[gameId]";

interface props {
  gameObject: GameModule;
  setChallengeSuccess: (boolean: boolean) => void;
}

const EndModule = (props: props): ReactElement => {
  const { gameObject, setChallengeSuccess } = props;
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div className="self-center w-4/5 m-10">
        <Card>
          <div className="self-center mb-5">
            <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
              {gameObject.title}
            </h1>
            <div className="self-center w-10/12 m-4">
              <img
                src={gameObject.image}
                alt="Tokyo Noire Hero"
                className="rounded-lg"
              />
            </div>
            <p className="px-6 mt-2 font-body1">{gameObject.description}</p>
          </div>
        </Card>
      </div>
      <div className="self-center w-3/4 ">
        <h1 className="self-center py-20 text-2xl uppercase font-heading">
          Mystery Complete
        </h1>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell className="text-lg font-heading">
                  Distance Travelled
                </TableCell>
                <TableCell align="right" className="font-body2">
                  Lots of Distance
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-lg font-heading">
                  Time Completed
                </TableCell>
                <TableCell align="right" className="font-body2">
                  Lots of Time
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-lg font-heading">
                  Points Earned
                </TableCell>
                <TableCell align="right" className="font-body2">
                  Lots of Points
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <button
          onClick={handleClick}
          id="themeButton"
          className="mt-20 mb-10 font-heading"
          type="button"
        >
          finish
        </button>
      </div>
    </>
  );
};

export default EndModule;
