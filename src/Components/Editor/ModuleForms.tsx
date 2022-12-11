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
import { saveGameInfo } from "../../pages/editor";

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

type props = {
  setGameData: (arg0: saveGameInfo) => void;
  gameData: saveGameInfo;
};

const ModuleForms = (props: props): ReactElement => {
  const { setGameData, gameData } = props;

  const published = useRef<boolean>(false);
  const titleOfGame = useRef<string>("");
  const title = useRef<string>("");
  const description = useRef<string>("");
  const userName = useRef<string>("");
  const minutes = useRef<string>("");
  const rating = useRef<string>("");
  const visibility = useRef<string>("");
  const coordinates = useRef<number[]>([]);
  const question = useRef<string>("");
  const answer = useRef<string>("");
  const hint = useRef<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [gameObject, setGameObject] = useState<GameModules | null>(null);
  const [gameModule, setGameModules] = useState<GameModules[]>([]);

  return (
    <div className="relative w-full h-full px-6 py-4 rounded shadow-lg flexCenterDiv bg-darkGrey shadow-slate-100">
      <FormStoryInformation
        titleOfGame={titleOfGame.current}
        minutes={minutes.current}
        rating={rating.current}
        visibility={visibility.current}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        description={description.current}
        setGameData={setGameData}
        gameData={gameData}
      />

      <FormLocation
        title={title.current}
        description={description.current}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        coordinates={coordinates.current}
        hint={hint.current}
      />

      <FormNarrative
        title={title.current}
        description={description.current}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
      />

      <FormQuestion
        title={title.current}
        description={description.current}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        question={question.current}
        answer={answer.current}
        hint={hint.current}
      />

      <FormEnd
        title={title.current}
        description={description.current}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default ModuleForms;
