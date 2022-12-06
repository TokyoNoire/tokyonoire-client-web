import React, { type FC, type ReactElement, useState, useEffect } from "react";
import LocationModule from "../../Components/LocationModule";
import NarrativePictureModule from "../../Components/NarrativePictureModule";
import StartModule from "../../Components/StartModule";
import TextQuestionModule from "../../Components/TextQuestionModule";
import PhotoQuestionModule from "../../Components/PhotoQuestionModule";
import EndModule from "../../Components/EndModule";
import NarrativeTextModule from "../../Components/NarrativeTextModule";
import NavigationModule from "../../Components/NavigationModule";
import MapLocationPicker from "../../Components/Editor/MapLocationPicker";
import HowToPlayPopup from "../../Components/HowToPlayPopup";

const Game: FC = (): ReactElement => {
  const [challengeSuccess, setChallengeSuccess] = useState<boolean>(false);
  const [typeOfModule, setTypeOfModule] = useState<string | null>("");

  interface gameModules {
    typeOfModule: string;
    description: string;
    question: string;
    answer: string;
    pictureId: string;
    locationCoordinates: Array<number>;
  }

  useEffect(() => {
    return setTypeOfModule("narrativePicture");
  }, []);

  const setCurrentComponent = () => {
    switch (typeOfModule) {
      case "start":
        return <StartModule />;

      case "location":
        return <LocationModule />;

      case "narrativePicture":
        return <NarrativePictureModule />;

      case "textQuestion":
        return <TextQuestionModule />;

      case "photoQuestion":
        return <PhotoQuestionModule />;

      case "narrative":
        return <NarrativeTextModule />;

      case "end":
        return <EndModule />;

      default:
        return null;
    }
  };

  return (
    <>
      <HowToPlayPopup/>
      <MapLocationPicker/>
      <NavigationModule/>
      {setCurrentComponent()}
    </>
  );
};

export default Game;
