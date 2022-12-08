import React, { type FC, type ReactElement } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import FormLocation from "./FormLocation";
import FormNarrative from "./FormNarrative";
import FormQuestion from "./FormQuestion";
import FormEnd from "./FormEnd";

const FormStoryInformation: FC = (): ReactElement => {
  return (
   <>
        {/* <ClearIcon className="absolute top-2 right-2 hover:shadow-indigo-500/40"/> */}
        <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
          Story information
        </h1>

        <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
        <TextField id="title" variant="filled" fullWidth/>

        <div className="grid grid-cols-4 gap-2 mt-10 grid-flow-cols">
          <p className="mb-2 text-sm uppercase font-heading">
            Estimated Time in minutes
          </p>
          <p className="text-sm uppercase font-heading">Rating</p>
          <p className="text-sm uppercase font-heading">Visibility</p>
          <p className="text-sm uppercase font-heading">Image Upload</p>
          <TextField id="estimated-time" variant="filled" />

          <select id="rating" className="p-2 text-black rounded-sm ">
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>

          <select id="visibility" className="p-2 text-black rounded-sm ">
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

        </>
  );
};

export default FormStoryInformation;
