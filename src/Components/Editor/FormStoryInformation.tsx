import React, { type FC, type ReactElement } from "react";
import TextField from "@mui/material/TextField";
import ImageWidget from "./ImageWidget";

interface prop {
  setTitle: (string: string) => void;
  setDescription: (string: string) => void;
  setMinutes: (number: string) => void;
  setRating: (string: string) => void;
  setVisibility: (boolean: string) => void;
  setImageUrl: (string: string) => void;
  imageUrl: string;
}

const FormStoryInformation = (prop: prop): ReactElement => {
  const {
    setTitle,
    setDescription,
    setMinutes,
    setRating,
    setVisibility,
    setImageUrl,
    imageUrl,
  } = prop;

  return (
    <>
      {/* <ClearIcon className="absolute top-2 right-2 hover:shadow-indigo-500/40"/> */}
      <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
        Story information
      </h1>

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
      <TextField
        id="title"
        variant="filled"
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />

      <div className="grid grid-cols-3 gap-2 mt-10 grid-flow-cols">
        <p className="mb-2 text-sm uppercase font-heading">
          Estimated Time in minutes
        </p>
        <p className="text-sm uppercase font-heading">Rating</p>
        <p className="text-sm uppercase font-heading">Visibility</p>
        <TextField
          id="estimated-time"
          type="number"
          onChange={(e) => setMinutes(e.target.value)}
          variant="filled"
        />

        <select
          id="rating"
          className="p-2 text-black rounded-sm"
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="G">G</option>
          <option value="PG">PG</option>
          <option value="PG-13">PG-13</option>
          <option value="R">R</option>
        </select>

        <select
          id="visibility"
          className="p-2 text-black rounded-sm"
          onChange={(e) => setVisibility(e.target.value)}
        >
          <option value="true">Private</option>
          <option value="false">Public</option>
        </select>
      </div>
      {imageUrl ? (
        <img
          className="w-3/5 mt-10 self-center"
          src={`${imageUrl}`}
          alt="preview"
        />
      ) : (
        ""
      )}
      <p className="mt-5 text-sm uppercase font-heading">Image Upload</p>
      <ImageWidget setImageUrl={setImageUrl} />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Description
      </p>
      <TextField
        multiline
        rows={15}
        defaultValue="Start writing here..."
        variant="filled"
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <button id="themeButton" className="self-center w-1/2 mt-10 mb-5">
        {" "}
        Save{" "}
      </button>
    </>
  );
};

export default FormStoryInformation;
