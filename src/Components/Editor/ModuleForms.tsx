import React, { type ReactElement, useState, useRef } from "react";
import FormLocation from "./FormLocation";
import FormNarrative from "./FormNarrative";
import FormQuestion from "./FormQuestion";
import FormEnd from "./FormEnd";
import FormStoryInformation from "./FormStoryInformation";
import { useContext } from "react";
import AppContext from "../../AppContext";
import { saveGameInfo, type GameModule } from "../../types/global";
import { AutoFixHighRounded } from "@mui/icons-material";

export type GameModules = {
  typeOfModule: string;
  title: string;
  description: string;
  question: string;
  answer: string;
  image: string;
  locationCoordinates: string[];
  hint: string;
};

const ModuleForms = (): ReactElement => {
  const value = useContext(AppContext);
  const {
    activeModule,
    setGameModules,
    gameModules,
    setGameInfoModule,
    gameInfoModule,
    gameData,
  } = value;
  console.log(gameInfoModule);

  const _idGame = useRef<string>("");
  const published = useRef<boolean>(false);
  const gameDescription = useRef<string>("");
  const gameImage = useRef<string>("");
  const titleOfGame = useRef<string>("");
  const userName = useRef<string>("");
  const estimatedTimeMinutes = useRef<string>("");
  const rating = useRef<string>("");
  const isPublished = useRef<string>("");
  const isPrivate = useRef<string>("");
  const startingLocationCoordinates = useRef<number[] | null>([]);
  const imageUrlGame = useRef<string>("");

  const title = useRef<string>("");
  const description = useRef<string>("");
  const coordinates = useRef<number[] | null>([]);
  const question = useRef<string>("");
  const answer = useRef<string>("");
  const hint = useRef<string>("");
  // const [imageUrl, setImageUrl] = useState<string>("");
  const imageUrl = useRef<string>("");
  const _id = useRef<string>("");
  const typeOfModule = useRef<string>("");

  // console.log(_id.current);

  const handleModuleUpdateClick = () => {
    const updateData: GameModule = {
      _id: _id.current,
      title: title.current,
      typeOfModule: typeOfModule.current,
      description: description.current,
      locationCoordinates: coordinates.current,
      question: question.current,
      answer: answer.current,
      hint: hint.current,
      image: imageUrl.current,
    };
    console.log(gameModules);
    const newGameModules = [];
    for (let i = 0; i < gameModules.length; i++) {
      console.log(gameModules[i]);
      newGameModules.push(gameModules[i]);
    }
    console.log(newGameModules);
    for (let i = 0; i < gameModules.length; i++) {
      if (gameModules[i]!._id === _id.current) {
        newGameModules.splice(i, 1, updateData);
      }
    }
    setGameModules(newGameModules);
  };
  const handleGameInfoModuleUpdateClick = () => {
    const newGameInfo: saveGameInfo = {
      _id: _idGame.current,
      titleOfGame: titleOfGame.current,
      description: gameInfoModule.description,
      estimatedTimeMinutes: estimatedTimeMinutes.current,
      rating: rating.current,
      isPrivate: isPrivate.current,
      isPublished: isPublished.current,
      startingLocationCoordinates: startingLocationCoordinates.current,
      gameModules: gameData.gameModules,
    };
    setGameInfoModule(newGameInfo);
  };

  if (activeModule) {
    typeOfModule.current = activeModule.typeOfModule;
    title.current = activeModule.title;
    description.current = activeModule.description;
    question.current = activeModule.question;
    answer.current = activeModule.answer;
    hint.current = activeModule.hint;
    _id.current = activeModule._id;
    imageUrl.current = activeModule.image
  }

  if (gameInfoModule) {
    _idGame.current = gameInfoModule._id;
    titleOfGame.current = gameInfoModule.titleOfGame;
    gameDescription.current = gameInfoModule.description;
    estimatedTimeMinutes.current = gameInfoModule.estimatedTimeMinutes;
    rating.current = gameInfoModule.rating;
    isPrivate.current = gameInfoModule.isPrivate;
    startingLocationCoordinates.current = gameInfoModule.startingLocationCoordinates;
    imageUrlGame.current = gameInfoModule.image;
  }

  if (!activeModule) {
    return (
      <FormStoryInformation
        titleOfGame={titleOfGame}
        estimatedTimeMinutes={estimatedTimeMinutes}
        rating={rating}
        isPublished={isPublished}
        isPrivate={isPrivate}
        imageUrlGame={imageUrlGame}
        gameDescription={gameDescription}
        startingLocationCoordinates={startingLocationCoordinates}
        handleGameInfoModuleUpdateClick={handleGameInfoModuleUpdateClick}
      />
    );
  } else {
    switch (activeModule.typeOfModule) {
      case "narrative":
        return (
          <FormNarrative
            key={_id.current}
            title={title}
            description={description}
            imageUrl={imageUrl}
            handleModuleUpdateClick={handleModuleUpdateClick}
          />
        );

      case "location":
        return (
          <FormLocation
            key={_id.current}
            title={title}
            description={description}
            imageUrl={imageUrl}
            coordinates={coordinates}
            hint={hint}
            handleModuleUpdateClick={handleModuleUpdateClick}
          />
        );

      case "question":
        return (
          <FormQuestion
            key={_id.current}
            title={title}
            description={description}
            imageUrl={imageUrl}
            question={question}
            answer={answer}
            hint={hint}
            handleModuleUpdateClick={handleModuleUpdateClick}
          />
        );

      case "end":
        return (
          <FormEnd
            key={_id.current}
            title={title}
            description={description}
            imageUrl={imageUrl}
            handleModuleUpdateClick={handleModuleUpdateClick}
          />
        );
    }
  }
  return <></>;
};

export default ModuleForms;
