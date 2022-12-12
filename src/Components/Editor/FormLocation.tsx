import React, { type FC, type ReactElement } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import MapLocationPicker from "./MapLocationPicker";
import ImageWidget from "./ImageWidget";
import { useContext } from "react";
import AppContext from "../../AppContext";

interface props {
  title: string;
  description: string;
  coordinates: number[];
  setImageUrl: (string: string) => void;
  imageUrl: string;
  hint: string;
}

const FormLocation = (props: props): ReactElement => {
  let { title, description, coordinates, imageUrl, hint } = props;
  const { setImageUrl } = props;
  const value = useContext(AppContext);
  const { gameData, gameModule, gameModuleObject } = value.state;
  const handleClick = () => {
    gameModule.current.push(gameModuleObject.current);
  };

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
        onChange={(e) => (title = e.target.value)}
      />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Image Upload
      </p>
      {imageUrl ? (
        <img
          className="w-3/5 mt-10 self-center"
          src={`${imageUrl}`}
          alt="preview"
        />
      ) : (
        ""
      )}
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
        onChange={(e) => (description = e.target.value)}
      />

      <MapLocationPicker />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Hint</p>
      <TextField
        variant="filled"
        defaultValue="Give a hint for the reader!"
        fullWidth
        onChange={(e) => (hint = e.target.value)}
      />
      <button
        id="themeButton"
        className="self-center w-1/2 mt-10 mb-5"
        onClick={(e) => {
          console.log("clicked");
          gameModuleObject.current = {
            typeOfModule: "location",
            title: title,
            image: imageUrl,
            description: description,
            locationCoordinates: [200, 200],
          };
          handleClick();
        }}
      >
        {" "}
        Save{" "}
      </button>
    </>
  );
};

export default FormLocation;
