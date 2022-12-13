import React, {
  type FC,
  type ReactElement,
  useState,
  useRef,
  useEffect,
} from "react";
import FormLocation from "./FormLocation";
import FormNarrative from "./FormNarrative";
import FormQuestion from "./FormQuestion";
import FormEnd from "./FormEnd";
import FormStoryInformation from "./FormStoryInformation";
import axios from "axios";
import { useLocalStorage } from "usehooks-ts";
import { useContext } from "react";
import AppContext from "../../AppContext";
import { type GameModule } from "../../types/global";

export type GameModules = {
  typeOfModule: string;
  title: string;
  description: string;
  question: string;
  answer: string[];
  image: string;
  locationCoordinates: string[];
  hint: string;
};

const ModuleForms = (): ReactElement => {
  const value = useContext(AppContext);
  const { activeModule, setActiveModule, setGameModules, gameModules } = value;

  const published = useRef<boolean>(false);
  const titleOfGame = useRef<string>("");
  const userName = useRef<string>("");
  const minutes = useRef<string>("");
  const rating = useRef<string>("");
  const visibility = useRef<string>("");
  const startLocation = useRef<string>("");

  const title = useRef<string>("");
  const description = useRef<string>("");
  const coordinates = useRef<number[] | null>([]);
  const question = useRef<string>("");
  const answer = useRef<string>("");
  const hint = useRef<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [localStorage, setLocalStorage] = useLocalStorage<string>("", "");
  const id = useRef<string>("");
  const typeOfModule = useRef<string>("");

  console.log(activeModule);
  console.log(id.current);

  const handleModuleUpdateClick = () => {
    const updateData: GameModule = {
      _id: id.current,
      title: title.current,
      typeOfModule: typeOfModule.current,
      description: description.current,
      locationCoordinates: coordinates.current,
      question: question.current,
      answer: answer.current,
      hint: hint.current,
      image: imageUrl,
    };
    const newGameModules = [...gameModules];
    for (let i = 0; i < gameModules.length; i++) {
      if (gameModules[i]!._id === id.current) {
        newGameModules.splice(i, 1, updateData);
      }
    }
    setGameModules(newGameModules);
  };
  if (activeModule !== null) {
    typeOfModule.current = activeModule.typeOfModule;
    title.current = activeModule.title;
    description.current = activeModule.description;
    question.current = activeModule.question;
    answer.current = activeModule.answer;
    hint.current = activeModule.hint;
    id.current = activeModule._id;
  }

  if (!activeModule) {
    return (
      <FormStoryInformation
        titleOfGame={titleOfGame.current}
        minutes={minutes.current}
        rating={rating.current}
        visibility={visibility.current}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        description={description.current}
        setGameData={value.setGameData}
        gameData={value.gameData}
        startLocation={startLocation.current}
      />
    );
  } else {
    switch (activeModule.typeOfModule) {
      case "narrative":
        return (
          <FormNarrative
            key={activeModule._id}
            title={title.current}
            description={description.current}
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
          />
        );

      case "location":
        return (
          <FormLocation
            key={activeModule._id}
            title={title.current}
            description={description.current}
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            coordinates={coordinates.current}
            hint={hint.current}
          />
        );

      case "question":
        return (
          <FormQuestion
            key={id.current}
            title={title.current}
            description={description.current}
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            question={question.current}
            answer={answer.current}
            hint={hint.current}
            handleModuleUpdateClick={handleModuleUpdateClick}
          />
        );

      case "end":
        return (
          <FormEnd
            key={activeModule._id}
            title={title.current}
            description={description.current}
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
          />
        );
    }
  }
  return <></>;
};

export default ModuleForms;
