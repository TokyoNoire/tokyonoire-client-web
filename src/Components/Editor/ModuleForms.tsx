import React, { type ReactElement, useState, useRef } from "react";
import FormLocation from "./FormLocation";
import FormNarrative from "./FormNarrative";
import FormQuestion from "./FormQuestion";
import FormEnd from "./FormEnd";
import GameInformation from "./GameInformation";
import { useContext } from "react";
import AppContext from "../../AppContext";
import { saveGameInfo, type GameModule } from "../../types/global";

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
  const { activeModule, setActiveModule, gameModules, setGameModules,
    gameInfoModule, setGameInfoModule, gameData, userId, localUserId, username, localUsername
  } = value;

  // Game Info References
  const _idGame = useRef<string>("");
  const isPublished = useRef<boolean | null>(null);
  const isPrivate = useRef<boolean | null>(null);
  const titleOfGame = useRef<string>("");
  const gameDescription = useRef<string>("");
  const author = useRef<string>("");
  const gameImageURL = useRef<string>("");
  const estimatedTimeMinutes = useRef<string>("");
  const rating = useRef<string>("");
  const startingLocationCoordinates = useRef<number[] | null>([]);

  if (gameInfoModule) {
    _idGame.current = gameInfoModule._id;
    isPublished.current = gameInfoModule.isPublished;
    isPrivate.current = gameInfoModule.isPrivate;
    titleOfGame.current = gameInfoModule.titleOfGame;
    gameDescription.current = gameInfoModule.description;
    author.current = gameInfoModule.author;
    gameImageURL.current = gameInfoModule.gameImageURL;
    estimatedTimeMinutes.current = gameInfoModule.estimatedTimeMinutes;
    rating.current = gameInfoModule.rating;
    startingLocationCoordinates.current = gameInfoModule.startingLocationCoordinates;
  }

  const handleGameInfoModuleUpdateClick = () => {
    const newGameInfo: saveGameInfo = {
      _id: _idGame.current,
      isPublished: isPublished.current,
      isPrivate: isPrivate.current,
      titleOfGame: titleOfGame.current,
      description: gameInfoModule.description,
      uId: localUserId ? localUserId : userId,
      author: localUsername ? localUsername : username,
      rating: rating.current,
      gameImageURL: gameImageURL.current,
      estimatedTimeMinutes: estimatedTimeMinutes.current,
      gameModules: gameData.gameModules,
      startingLocationCoordinates: startingLocationCoordinates.current,
    };
    setGameInfoModule(newGameInfo);
  };

  // Game Modules References
  const _id = useRef<string>("");
  const typeOfModule = useRef<string>("");
  const title = useRef<string>("");
  const description = useRef<string>("");
  const imageURL = useRef<string>("");
  const question = useRef<string>("");
  const answer = useRef<string>("");
  const hint = useRef<string>("");
  const locationCoordinates = useRef<number[] | null>([]);

  if (activeModule) {
    // console.log("I ran")
    // console.log(activeModule)
    _id.current = activeModule._id;
    typeOfModule.current = activeModule.typeOfModule;
    title.current = activeModule.title;
    description.current = activeModule.description;
    imageURL.current = activeModule.imageURL
    question.current = activeModule.question;
    answer.current = activeModule.answer;
    hint.current = activeModule.hint;
    locationCoordinates.current = activeModule.locationCoordinates
  }

  const handleModuleUpdateClick = () => {
    const updateData: GameModule = {
      _id: _id.current,
      typeOfModule: typeOfModule.current,
      title: title.current,
      description: description.current,
      imageURL: imageURL.current,
      question: question.current,
      answer: answer.current,
      hint: hint.current,
      locationCoordinates: locationCoordinates.current,
    };
    const newGameModules = [];
    for (let i = 0; i < gameModules.length; i++) {
      newGameModules.push(gameModules[i]);
    }
    // console.log(newGameModules);
    for (let i = 0; i < gameModules.length; i++) {
      if (gameModules[i]!._id === _id.current) {
        newGameModules.splice(i, 1, updateData);
      }
    }
    setGameModules(newGameModules);
    setActiveModule(updateData);
  };

  if (!activeModule) {
    return (
      <GameInformation
        titleOfGame={titleOfGame}
        estimatedTimeMinutes={estimatedTimeMinutes}
        rating={rating}
        isPublished={isPublished}
        isPrivate={isPrivate}
        gameImageURL={gameImageURL}
        gameDescription={gameDescription}
        startingLocationCoordinates={startingLocationCoordinates}
        handleGameInfoModuleUpdateClick={handleGameInfoModuleUpdateClick}
      />
    );
  } else {
    switch (activeModule.typeOfModule) {
      case "start":
        return (
          <FormEnd
            key={_id.current}
            title={title}
            typeOfModule={typeOfModule}
            description={description}
            imageURL={imageURL}
            handleModuleUpdateClick={handleModuleUpdateClick}
          />
        );

      case "narrative":
        return (
          <FormNarrative
            key={_id.current}
            title={title}
            typeOfModule={typeOfModule}
            description={description}
            imageURL={imageURL}
            handleModuleUpdateClick={handleModuleUpdateClick}
          />
        );

      case "location":
        return (
          <FormLocation
            key={_id.current}
            title={title}
            typeOfModule={typeOfModule}
            description={description}
            imageURL={imageURL}
            locationCoordinates={locationCoordinates}
            hint={hint}
            handleModuleUpdateClick={handleModuleUpdateClick}
          />
        );

      case "question":
        return (
          <FormQuestion
            key={_id.current}
            title={title}
            typeOfModule={typeOfModule}
            description={description}
            imageURL={imageURL}
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
            typeOfModule={typeOfModule}
            description={description}
            imageURL={imageURL}
            handleModuleUpdateClick={handleModuleUpdateClick}
          />
        );
    }
  }
  return <></>;
};

export default ModuleForms;
