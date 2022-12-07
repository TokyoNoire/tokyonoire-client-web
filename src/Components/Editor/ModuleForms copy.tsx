import React, { type FC, type ReactElement } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";

const ModuleForms: FC = (): ReactElement => {
  return (
    <div className="relative w-full h-full rounded shadow-lg bg-darkGrey shadow-slate-100">
        <div className="absolute top-2 right-2 hover:shadow-indigo-500/40"><ClearIcon/></div>
      <div className="px-6 py-4">
        <div className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading shadow-white">
          Story information
        </div>

        <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
        <TextField id="title" variant="filled" fullWidth/>

        <div className="grid grid-cols-3 mt-10 grid-flow-cols">
          <p className="mb-2 text-sm uppercase font-heading">
            Estimated Time in minutes
          </p>
          <p className="text-sm uppercase font-heading">Rating</p>
          <p className="text-sm uppercase font-heading">Visibility</p>
          <TextField id="estimated-time" variant="filled" />

          <select id="rating" className="p-2 text-black rounded-sm ">
            <option selected>Choose a rating</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>

          <select id="visibility" className="p-2 text-black rounded-sm ">
            <option selected>Choose visibility</option>
            <option value="true">Private</option>
            <option value="false">Public</option>

          </select>
        </div>

        <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Description</p>
        <TextField
          multiline
          rows={15}
          defaultValue="Start writing here..."
          variant="filled"
          fullWidth
        />

        <button id="themeButton" className="self-center w-1/2 mt-10 mb-5"> Save </button>
      </div>
    </div>
  );
};

export default ModuleForms;
