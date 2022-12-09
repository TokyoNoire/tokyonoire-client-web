import React, { type FC, type ReactElement, useState, useRef } from "react";
import FormLocation from "./FormLocation";
import FormNarrative from "./FormNarrative";
import FormQuestion from "./FormQuestion";
import FormEnd from "./FormEnd";
import FormStoryInformation from "./FormStoryInformation";
import axios from "axios";

const ModuleForms: FC = (): ReactElement => {
  const [published, setPublished] = useState<boolean | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [coordinates, setCoordinates] = useState<number[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [gameModule, setGameModules] = useState<Object>([]);

  const postGame = async () => {
    await axios.post("/editor", {
      isPublished: published,
      titleOfGame: title,
      description: description,
      author: userName,
      rating: rating,
      estimatedMinutes: minutes,
      image: imageUrl,
      isPrivate: visibility,
      gameModules: gameModule,
    });
  };

  return (
    <div className="relative w-full h-full px-6 py-4 rounded shadow-lg flexCenterDiv bg-darkGrey shadow-slate-100">
      <FormStoryInformation
        setTitle={setTitle}
        setDescription={setDescription}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        setMinutes={setMinutes}
        setRating={setRating}
        setVisibility={setVisibility}
      />

      <FormLocation
        setTitle={setTitle}
        setDescription={setDescription}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        setCoordinates={setCoordinates}
        setHint={setHint}
      />

      <FormNarrative
        setTitle={setTitle}
        setDescription={setDescription}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
      />

      <FormQuestion
        setTitle={setTitle}
        setDescription={setDescription}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        setQuestion={setQuestion}
        setAnswer={setAnswer}
        setHint={setHint}
      />

      <FormEnd
        setTitle={setTitle}
        setDescription={setDescription}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default ModuleForms;
