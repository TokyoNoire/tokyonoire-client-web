import React, { type FC, type ReactElement } from "react";
import TextField from "@mui/material/TextField";
import ImageWidget from "./ImageWidget";
import { type saveGameInfo } from "../../types/global";
import { useContext } from "react";
import { start } from "repl";

interface prop {
  titleOfGame: string;
  description: string;
  minutes: string;
  rating: string;
  visibility: string;
  startLocation: string;
  setImageUrl: (string: string) => void;
  imageUrl: string;
  setGameData: (arg0: saveGameInfo) => void;
  gameData: saveGameInfo;
}

const FormStoryInformation = (prop: prop): ReactElement => {
  let { titleOfGame, description, minutes, rating, visibility, startLocation } = prop;
  //Build is not happy if I set these as let, so I seperated them for now.
  const { setImageUrl, imageUrl, setGameData, gameData } = prop;

  return (
    <>
      {/* <ClearIcon className="absolute top-2 right-2 hover:shadow-indigo-500/40"/> */}
      <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
        Story information
      </h1>
      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Title of Game
      </p>
      <TextField
        id="titleOfGame"
        variant="filled"
        onChange={(e) => (titleOfGame = e.target.value)}
        fullWidth
      />
      <div className="grid grid-cols-4 gap-2 mt-10 grid-flow-cols">
        <p className="mb-2 text-sm uppercase font-heading">
          Estimated Time in minutes
        </p>
        <p className="text-sm uppercase font-heading">Rating</p>
        <p className="text-sm uppercase font-heading">Visibility</p>
        <p className="text-sm uppercase font-heading">Start Location</p>
        <TextField
          id="estimated-time"
          type="number"
          onChange={(e) => (minutes = e.target.value)}
          variant="filled"
        />

        <select
          id="rating"
          className="p-2 text-black rounded-sm"
          onChange={(e) => (rating = e.target.value)}
        >
          <option value="">Choose a Rating</option>
          <option value="G">G</option>
          <option value="PG">PG</option>
          <option value="PG-13">PG-13</option>
          <option value="R">R</option>
        </select>

        <select
          id="visibility"
          className="p-2 text-black rounded-sm"
          onChange={(e) => (visibility = e.target.value)}
        >
          <option value="">Choose visibility</option>
          <option value="true">Private</option>
          <option value="false">Public</option>
        </select>

        <TextField
          id="start-location"
          type="text"
          onChange={(e) => (startLocation = e.target.value)}
          variant="filled"
        />
      </div>
      {imageUrl ? (
        <img
          className="self-center w-3/5 mt-10"
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
        {...(
          description !== ""
            ? { defaultValue: description }
            : { placeholder: "Start writing here..." }
        )}
        variant="filled"
        onChange={(e) => (description = e.target.value)}
        fullWidth
      />
      <button
        id="themeButton"
        className="self-center w-1/2 mt-10 mb-5"
        onClick={() => {
          setGameData({
            _id: "",
            titleOfGame: titleOfGame,
            isPublished: visibility,
            description: description,
            image: imageUrl,
            estimatedTimeMinutes: minutes,
            rating: rating,
            startLocation: startLocation,
          });
        }}
      >
        {" "}
        Save{" "}
      </button>
    </>
  );
};

export default FormStoryInformation;
