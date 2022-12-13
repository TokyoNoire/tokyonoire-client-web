import React, { type FC, type ReactElement } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import ImageWidget from "./ImageWidget";
import { useContext } from "react";
import AppContext from "../../AppContext";

interface props {
  title: string;
  description: string;
  question: string;
  answer: string;
  hint: string;
  setImageUrl: (string: string) => void;
  imageUrl: string;
}

const FormQuestion = (props: props): ReactElement => {
  let { title, description, answer, hint, question, imageUrl } = props;
  const { setImageUrl } = props;
  const value = useContext(AppContext);
  const { gameData, setActiveModule, gameModule, gameModuleObject } = value;
  const handleClick = () => {
    gameModule.current.push(gameModuleObject.current);
  };
  return (
    <>
      <ClearIcon className="absolute top-2 right-2 hover:shadow-indigo-500/40" />
      <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
        Question
      </h1>

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
      <TextField
        variant="filled"
        defaultValue="What's the title of this block?"
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
        rows={20}
        defaultValue="Start writing here..."
        variant="filled"
        fullWidth
        onChange={(e) => (description = e.target.value)}
      />
      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Question</p>
      <TextField
        variant="filled"
        defaultValue="What question do you want to ask?"
        fullWidth
        onChange={(e) => (question = e.target.value)}
      />
      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Answer</p>
      <TextField
        variant="filled"
        defaultValue="The answer to your question is..."
        fullWidth
        onChange={(e) => (answer = e.target.value)}
      />
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
          setActiveModule({
            typeOfModule: "Question",
            title: title,
            image: imageUrl,
            description: description,
            question: question,
            answer: answer,
            hint: hint,
          });
          handleClick();
        }}
      >
        {" "}
        Save{" "}
      </button>
    </>
  );
};

export default FormQuestion;
