import React, { type FC, type ReactElement } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";

const FormNarrative = (): ReactElement => {
  return (
    <>
      <ClearIcon className="absolute top-2 right-2 hover:shadow-indigo-500/40" />
      <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
        Narrative
      </h1>

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
      <TextField id="title" defaultValue="What is the title of this block?" variant="filled" fullWidth />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Image Upload
      </p>

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Description</p>
      <TextField
        multiline
        rows={20}
        defaultValue="Start writing here..."
        variant="filled"
        fullWidth
      />
      <button id="themeButton" className="self-center w-1/2 mt-10 mb-5">
  
        Save
      </button>
    </>
  );
};

export default FormNarrative;