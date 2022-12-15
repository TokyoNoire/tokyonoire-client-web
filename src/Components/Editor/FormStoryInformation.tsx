import React, {
  type FC,
  type ReactElement,
  type MutableRefObject,
} from "react";
import TextField from "@mui/material/TextField";
import ImageWidget from "./ImageWidget";
import AppContext from "../../AppContext";
import { saveGameInfo } from "../../types/global";
import { useContext } from "react";

interface prop {
  titleOfGame: MutableRefObject<string>;
  gameDescription: MutableRefObject<string>;
  estimatedTimeMinutes: MutableRefObject<string>;
  rating: MutableRefObject<string>;
  isPublished: MutableRefObject<string>;
  isPrivate: MutableRefObject<string>;
  startingLocationCoordinates: MutableRefObject<number[] | null>;
  setImage: (string: string) => void;
  image: string;
  handleGameInfoModuleUpdateClick: () => void;
}

const FormStoryInformation = (prop: prop): ReactElement => {
  //Build is not happy if I set these as let, so I seperated them for now.
  const {
    titleOfGame,
    gameDescription,
    estimatedTimeMinutes,
    rating,
    isPublished,
    isPrivate,
    startingLocationCoordinates,
    setImage,
    image,
    handleGameInfoModuleUpdateClick,
  } = prop;
  const value = useContext(AppContext);
  const { setActiveModule, gameModules, setCurrentGame } = value;

  // const handleClick = () => {
  //   setCurrentGame((prevValue: null) => gameData);
  //   console.log("🌒localStorag:", localStorage.currentGameData);
  // };

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
        {...(titleOfGame.current !== ""
          ? { defaultValue: titleOfGame.current }
          : { placeholder: "What's the title of this game?" })}
        onChange={(e) => (titleOfGame.current = e.target.value)}
        fullWidth
      />
      <div className="grid grid-cols-3 gap-2 mt-10 grid-flow-cols">
        <p className="mb-2 text-sm uppercase font-heading">
          Estimated Time in minutes
        </p>
        <p className="text-sm uppercase font-heading">Rating</p>
        <p className="text-sm uppercase font-heading">Visibility</p>
        {/* <p className="text-sm uppercase font-heading">Start Location</p> */}
        <TextField
          id="estimated-time"
          type="number"
          {...(estimatedTimeMinutes.current !== ""
            ? { defaultValue: estimatedTimeMinutes.current }
            : { placeholder: "Start writing here..." })}
          variant="filled"
        />

        <select
          id="rating"
          className="p-2 text-black rounded-sm"
          {...(rating.current !== ""
            ? { defaultValue: rating.current }
            : { placeholder: "" })}
          onChange={(e) => {
            rating.current = e.target.value;
          }}
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
          {...(isPrivate.current !== ""
            ? { defaultValue: isPrivate.current }
            : { placeholder: "" })}
          onChange={(e) => {
            isPrivate.current = e.target.value;
          }}
        >
          <option value="">Choose visibility</option>
          <option value="true">Private</option>
          <option value="false">Public</option>
        </select>

        {/* <TextField
          id="start-location"
          type="text"
          onChange={(e) => {
            startingLocationCoordinates.current = e.target.value;
          }}
          variant="filled"
        /> */}
      </div>
      {image !== "" ? (
        <img
          className="self-center w-3/5 mt-10"
          src={`${image}`}
          alt="preview"
        />
      ) : (
        ""
      )}
      <p className="mt-5 text-sm uppercase font-heading">Image Upload</p>
      <ImageWidget setImage={setImage} />
      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Description
      </p>
      <TextField
        multiline
        rows={15}
        {...(gameDescription.current !== ""
          ? { defaultValue: gameDescription.current }
          : { placeholder: "Start writing here..." })}
        variant="filled"
        onChange={(e) => (gameDescription.current = e.target.value)}
        fullWidth
      />
      <button
        id="themeButton"
        className="self-center w-1/2 mt-10 mb-5"
        onClick={() => handleGameInfoModuleUpdateClick()}
      >
        {" "}
        update{" "}
      </button>
    </>
  );
};

export default FormStoryInformation;
