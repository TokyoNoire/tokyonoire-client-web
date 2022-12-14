import React, { type ReactElement, useContext, type MutableRefObject } from "react";
import AppContext from "../../AppContext";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import ImageWidget from "./ImageWidget";

interface props {
  title: MutableRefObject<string>;
  description: MutableRefObject<string>;
  question: MutableRefObject<string>;
  answer: MutableRefObject<string>;
  hint: MutableRefObject<string>;
  setImageUrl: (string: string) => void;
  imageUrl: string;
  handleModuleUpdateClick: () => void;
}

const FormQuestion = (props: props): ReactElement => {
  const {
    title,
    description,
    setImageUrl,
    imageUrl,
    question,
    answer,
    hint,
    handleModuleUpdateClick,
  } = props;
  props;
  const value = useContext(AppContext);
  const { setActiveModule } = value;

  const handleClose = () => {
    setActiveModule(null);
  };

  console.log(title)
  return (
    <>
      <ClearIcon
        className="absolute top-2 right-2 hover:shadow-indigo-500/40"
        onClick={handleClose}
      />
      <h1 className="self-center mt-10 mb-2 text-2xl font-bold uppercase font-heading">
        Question
      </h1>

      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p>
      <TextField
        variant="filled"
        {...(
          title.current !== ""
            ? { defaultValue: title.current }
            : { placeholder: "What's the title of this block?" }
        )}
        fullWidth
        onChange={(e) => {
          title.current = e.target.value;
          console.log(title);
        }}
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
        rows={20}
        {...(
          description.current !== ""
            ? { defaultValue: description.current }
            : { placeholder: "Start writing here..." }
        )}
        variant="filled"
        fullWidth
        onChange={(e) => {
          description.current = e.target.value;
          console.log(description);
        }}
      />
      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Question</p>
      <TextField
        variant="filled"
        {...(
          question.current !== ""
            ? { defaultValue: question.current }
            : { placeholder: "What question do you want to ask?" }
        )}
        fullWidth
        onChange={(e) => (question.current = e.target.value)}
      />
      <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Answer</p>
      <TextField
        variant="filled"
        {...(
          answer.current !== ""
            ? { defaultValue: answer.current }
            : { placeholder: "The answer to your question is..." }
        )}
        fullWidth
        onChange={(e) => (answer.current = e.target.value)}
      />
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

export default FormQuestion;
