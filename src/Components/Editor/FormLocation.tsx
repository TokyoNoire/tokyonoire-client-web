import React, { type FC, type ReactElement } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import MapLocationPicker from "./MapLocationPicker";
import ImageWidget from "./ImageWidget";

interface props {
  title: string;
  description: string;
  coordinates: number[];
  setImageUrl: (string: string) => void;
  imageUrl: string;
  hint: string;
}

const FormLocation = (props: props): ReactElement => {
  const { title, description, coordinates, imageUrl, setImageUrl, hint } =
    props;

  return (
    <>
      <ClearIcon className="absolute top-2 right-2 hover:shadow-indigo-500/40" />
      <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
        Location
      </h1>

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
      <TextField
        id="title"
        defaultValue="What's the title of this block?"
        variant="filled"
        fullWidth
      />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Image Upload
      </p>
      <ImageWidget setImageUrl={setImageUrl} />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Description
      </p>
      <TextField
        multiline
        rows={5}
        defaultValue="Start writing here..."
        variant="filled"
        fullWidth
        className="mb-5"
      />

      <MapLocationPicker />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Hint</p>
      <TextField
        variant="filled"
        defaultValue="Give a hint for the reader!"
        fullWidth
      />
      <button id="themeButton" className="self-center w-1/2 mt-10 mb-5">
        {" "}
        Save{" "}
      </button>
    </>
  );
};

export default FormLocation;
