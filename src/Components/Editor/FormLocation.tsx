import React, {
  type ReactElement,
  type MutableRefObject,
  useContext,
} from "react";
import AppContext from "../../AppContext";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import MapLocationPicker from "./MapLocationPicker";
import ImageWidget from "./ImageWidget";

interface props {
  title: MutableRefObject<string>;
  description: MutableRefObject<string>;
  coordinates: MutableRefObject<number[] | null>;
  setImageUrl: (string: string) => void;
  imageUrl: string;
  hint: MutableRefObject<string>;
  handleModuleUpdateClick: () => void;
}

const FormLocation = (props: props): ReactElement => {
  const {
    title,
    description,
    coordinates,
    setImageUrl,
    imageUrl,
    hint,
    handleModuleUpdateClick,
  } = props;
  const value = useContext(AppContext);
  const { setActiveModule } = value;

  // const handleClick = () => {};

  const handleClose = () => {
    setActiveModule(null);
  };

  return (
    <>
      <ClearIcon
        className="absolute top-2 right-2 hover:shadow-indigo-500/40"
        onClick={handleClose}
      />
      <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
        Location
      </h1>

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
      <TextField
        id="title"
        {...(
          title.current !== ""
            ? { defaultValue: title.current }
            : { placeholder: "What's the title of this block?" }
        )}
        variant="filled"
        fullWidth
        onChange={(e) => (title.current = e.target.value)}
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
        {...(
          description.current !== ""
            ? { defaultValue: description.current }
            : { placeholder: "Start writing here..." }
        )}
        variant="filled"
        fullWidth
        className="mb-5"
        onChange={(e) => (description.current = e.target.value)}
      />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
        Location
      </p>

      <MapLocationPicker />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Hint</p>
      <TextField
        variant="filled"
        {...(
          hint.current !== ""
            ? { defaultValue: hint.current }
            : { placeholder: "Give a hint for the reader!" }
        )}


        fullWidth
        onChange={(e) => (hint.current = e.target.value)}
      />
      <button
        id="themeButton"
        className="self-center w-1/2 mt-10 mb-5"
        onClick={() => {
          handleModuleUpdateClick();
        }}
      >
        Update
      </button>
    </>
  );
};

export default FormLocation;
