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

const ModuleForms: FC = (): ReactElement => {
  const published = useRef<boolean>(false);
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
  const [gameObject, setGameObject] = useState<GameModules>();
  const [gameModule, setGameModules] = useState<object>({});

  const postGame = async () => {
    await axios.post("/editor", {
      isPublished: published.current,
      titleOfGame: title.current,
      description: description.current,
      author: userName.current,
      rating: rating.current,
      estimatedMinutes: minutes.current,
      image: imageUrl,
      isPrivate: visibility.current,
      gameModules: gameModule,
    });
  };

  return (
    <div className="relative w-full h-full px-6 py-4 rounded shadow-lg flexCenterDiv bg-darkGrey shadow-slate-100">
      <FormStoryInformation
        title={title.current}
        description={description.current}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        minutes={minutes.current}
        rating={rating.current}
        visibility={visibility.current}
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
