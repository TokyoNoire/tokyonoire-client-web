import React, { type FC, type ReactElement, useState } from "react";
import TextField from "@mui/material/TextField";

const ListOfPublicGames: FC = (): ReactElement => {
  return (
    <div className="w-screen h-screen flexCenterDiv">
      <h1 className="mb-5 text-center text-m font-heading">
         &quot;Or, do you want to choose an open case?&quot;
      </h1>
      <div className="flex items-center">
      <select
          id="visibility"
          className="p-2 text-black bg-white rounded-sm h-14 font-heading"
        >
          <option value="">Filter</option>
          <option value="name">Name</option>
          <option value="author">Author</option>
          <option value="rating">Rating</option>
          <option value="location">Location</option>
        </select>
        <TextField
          id="caseSearch"
          fullWidth
          label="Search case..."
          variant="filled"
          aria-label="enter a game id"
        //   className=""
        />
        <button id="themeButton" className="self-center h-14 font-heading">
          search
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-sm text-center ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-body2">
                case title
              </th>
              <th scope="col" className="px-6 py-3 font-body2">
                author
              </th>
              <th scope="col" className="px-6 py-3 font-body2">
                rating
              </th>
              <th scope="col" className="px-6 py-3 font-body2">
                location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-2 font-heading whitespace-nowrap"
              >
                The Salad Murders
              </th>
              <td className="px-6 py-4 font-heading">Kazuki Kagoshima</td>
              <td className="px-6 py-4 font-heading">G</td>
              <td className="px-6 py-4 font-heading">Roppongi</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-2 font-heading whitespace-nowrap"
              >
                The Salad Murders
              </th>
              <td className="px-6 py-4 font-heading">Kazuki Kagoshima</td>
              <td className="px-6 py-4 font-heading">G</td>
              <td className="px-6 py-4 font-heading">Roppongi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfPublicGames;
