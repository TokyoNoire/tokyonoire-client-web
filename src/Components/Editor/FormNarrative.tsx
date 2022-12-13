import React, { type FC, type ReactElement, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import ImageWidget from "./ImageWidget";
import { useContext } from "react";
import AppContext from "../../AppContext";

interface props {
  title: string;
  description: string;
  setImageUrl: (string: string) => void;
  imageUrl: string;
}

const FormNarrative = (props: props): ReactElement => {
  let { title, description } = props;
  const { setImageUrl, imageUrl } = props;
  const value = useContext(AppContext);
  const {
    gameData,
    setActiveModule,
    gameModule,
    gameModuleObject,
    activeModule,
  } = value;

  return (
    <>
      <ClearIcon className="absolute top-2 right-2 hover:shadow-indigo-500/40" />
      <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
        Narrative
      </h1>

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
      <TextField
        id="title"
        defaultValue={title ? title : "What is the title of this block?"}
        variant="filled"
        fullWidth
        onChange={(e) => (title = e.target.value)}
      />
      {imageUrl ? (
        <img
          className="w-3/5 mt-10 self-center"
          src={`${imageUrl}`}
          alt="preview"
        />
      ) : (
        ""
      )}

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Image Upload
      </p>
      <ImageWidget setImageUrl={setImageUrl} />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Description
      </p>
      <TextField
        multiline
        rows={20}
        defaultValue={description ? description : "Start writing here..."}
        variant="filled"
        fullWidth
        onChange={(e) => (description = e.target.value)}
      />
      <button
        id="themeButton"
        className="self-center w-1/2 mt-10 mb-5"
        onClick={() => {
          setActiveModule({
            title: title,
            image: imageUrl,
            description: description,
          });
          console.log(activeModule);
        }}
      >
        Save
      </button>
    </>
  );
};

export default FormNarrative;
