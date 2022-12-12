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
import { useContext } from "react";
import AppContext from "../../AppContext";

// type props = {
//   setGameData: (arg0: saveGameInfo) => void;
//   gameData: saveGameInfo;
// };

const ModuleForms = (): ReactElement => {
  const value = useContext(AppContext);
  const { gameData, gameModule } = value.state;
  const selectedGameData = value.setGameData;

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

  return (
    <>
      <div className="relative w-full h-144 overflow-scroll justify-start flex flex-col px-6 py-4 rounded shadow-lg bg-darkGrey shadow-slate-100">
        <FormStoryInformation
          titleOfGame={titleOfGame.current}
          minutes={minutes.current}
          rating={rating.current}
          visibility={visibility.current}
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
          description={description.current}
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
    </>
  );
};

export default ModuleForms;
