import React, { type FC, type ReactElement, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { saveGameInfo } from "../../types/global";

const AuthoredListPopup: FC = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  const [gamesAuthored, setGamesAuthored] = useState<saveGameInfo[] | null>(null)
  
  const handleClose = () => {
    setOpen(false);
  };

  const gamesAuthoredList = gamesAuthored!.map((gamesAuthored, index) => {
    return (
      <tbody key={index} id={gamesAuthored._id}>
        <tr className="bg-white border-b" id={gamesAuthored._id}>
          <th
            scope="row"
            className="px-6 py-2 font-heading whitespace-nowrap"
            id={gamesAuthored._id}
          >
            {gamesAuthored.titleOfGame}
          </th>
          <td className="px-6 py-4 font-heading" id={gamesAuthored._id}>
            {gamesAuthored.rating}
          </td>
          <td className="px-6 py-4 font-heading" id={gamesAuthored._id}>
            {(gamesAuthored.isPrivate)? "private": "public"}
            </td>
            <td className="px-6 py-4 font-heading" id={gamesAuthored._id}>
            {gamesAuthored.isPublished}
            </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="flexCenterDiv">
      <Dialog open={open} onClose={handleClose}>
        <p className="self-center p-5 text-xl text-center uppercase font-heading">Welcome to the Story Editor</p>
        <DialogContent>
          <p className="text-center font-body1">
          `&quot;Hello detective, are you ready to post a case?`&quot;
          </p>
          </DialogContent>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm text-center ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-body2">
                  case title
                </th>
              
                <th scope="col" className="px-6 py-3 font-body2">
                  rating
                </th>
                <th scope="col" className="px-6 py-3 font-body2">
                  visibility
                </th>
                <th scope="col" className="px-6 py-3 font-body2">
                  published
                </th>
              </tr>
            </thead>
          {gamesAuthoredList}
          </table>
        </div>
      </Dialog>
    </div>
  );
};

export default AuthoredListPopup;
