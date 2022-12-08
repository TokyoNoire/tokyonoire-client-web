import React, { type FC, type ReactElement } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";

const FormQuestion = (): ReactElement => {
  return (
    <>
      <ClearIcon className="absolute top-2 right-2 hover:shadow-indigo-500/40" />
      <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
        Question
      </h1>


      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
      <TextField variant="filled" defaultValue="What's the title of this block?" fullWidth />

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

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Question</p>
      <TextField variant="filled" defaultValue="What question do you want to ask?" fullWidth />
      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Answer</p>
      <TextField variant="filled" defaultValue="The answer to your question is..." fullWidth />
      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Hint</p>
      <TextField variant="filled" defaultValue="Give a hint for the reader!" fullWidth />

      <button id="themeButton" className="self-center w-1/2 mt-10 mb-5">
        {" "}
        Save{" "}
      </button>
    </>
  );
};

export default FormQuestion;
