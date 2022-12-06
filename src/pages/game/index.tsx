import React, { type FC, type ReactElement, useState, useEffect } from "react";
import LocationModule from "../../Components/LocationModule";
import NarrativePictureModule from "../../Components/NarrativePictureModule";
import TextQuestionModule from "../../Components/TextQuestionModule";
import PhotoQuestionModule from "../../Components/PhotoQuestionModule";
import EndModule from "../../Components/EndModule";
import NarrativeTextModule from "../../Components/NarrativeTextModule";
import HowToPlayPopup from "../../Components/HowToPlayPopup";
import NavigationModule from "../../Components/NavigationModule";

export type GameModule = {
  _id: string;
  typeOfModule: string;
  title: string;
  description: string;
  question: string;
  answer: string;
  image: string;
  locationCoordinates: Array<number>;
};


const testObject = {
  _id: "21312",
  title: 'hellohello',
  typeOfModule: "location",
  description:
    "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
  question: "when do you sing?",
  answer: "everyday",
  image:
    "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  locationCoordinates: [1, 2],
};

const Game: FC = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  const [challengeSuccess, setChallengeSuccess] = useState<boolean>(false);
  const [typeOfModule, setTypeOfModule] = useState<string>("");
  const [gameObject, setGameObject] = useState<GameModule>(testObject);

  const [geolocationPermission, setGeolocationPermission] = useState<boolean>(false);
  const [gyroscopePermission, setGyroscopePermission] = useState<boolean>(false);


  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setGameObject(testObject);
    setTypeOfModule(gameObject.typeOfModule);
  }, []);

  const setCurrentComponent = () => {
    switch (typeOfModule) {
      case "location":
        return (
          <>
            <LocationModule gameObject={gameObject} />
            <NavigationModule
              geolocationPermission={geolocationPermission}
              gyroscopePermission={gyroscopePermission}
            />
          </>
        );

      case "narrativePicture":
        return <NarrativePictureModule gameObject={gameObject} />;

      case "narrativeText":
        return <NarrativePictureModule gameObject={gameObject} />;

      case "textQuestion":
        return <TextQuestionModule gameObject={gameObject} />;

      case "photoQuestion":
        return <PhotoQuestionModule gameObject={gameObject} />;

      case "narrative":
        return <NarrativeTextModule gameObject={gameObject} />;

      case "end":
        return <EndModule gameObject={gameObject} />;

      default:
        return null;
    }
  };

  return (
    <>
      <HowToPlayPopup
        // geolocationPermission={geolocationPermission}
        // gyroscopePermission={gyroscopePermission}
      />
      {setCurrentComponent()}
    </>
  );
};

export default Game;
