import React, { type ReactElement, type MutableRefObject, useContext } from "react";
import AppContext from "../../AppContext";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import ImageWidget from "./ImageWidget";

interface props {
  title: MutableRefObject<string>;
  description: MutableRefObject<string>;
  setImageUrl: (string: string) => void;
  imageUrl: string;
  handleModuleUpdateClick: () => void;
}

const FormEnd = (props: props): ReactElement => {
  const { title, description, setImageUrl, handleModuleUpdateClick } = props;
  const value = useContext(AppContext);
  const { setActiveModule, imageUrl } =
    value;

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
        End
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
          className="self-center w-3/5 mt-10"
          src={`${imageUrl}`}
          alt="preview"
        />
      ) : (
        ""
      )}

      <ImageWidget setImageUrl={setImageUrl} />

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Body</p>
      <TextField
        multiline
        rows={20}
        {...(
          description.current !== ""
            ? { defaultValue: description.current }
            : { placeholder: "Start writing here..." }
        )}
        variant="filled"
        fullWidth
        onChange={(e) => (description.current = e.target.value)}
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

export default FormEnd;
