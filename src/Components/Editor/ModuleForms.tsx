import React, { type FC, type ReactElement, useState, useRef } from "react";
import FormLocation from "./FormLocation";
import FormNarrative from "./FormNarrative";
import FormQuestion from "./FormQuestion";
import FormEnd from "./FormEnd";
import FormStoryInformation from "./FormStoryInformation";

const ModuleForms: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [coordinates, setCoordinates] = useState<number[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const imageUrl = useRef<string>("");

  return (
    <div className="relative w-full h-full px-6 py-4 rounded shadow-lg flexCenterDiv bg-darkGrey shadow-slate-100">
      <FormStoryInformation
        setTitle={setTitle}
        setDescription={setDescription}
        imageUrl={imageUrl.current}
        setMinutes={setMinutes}
        setRating={setRating}
        setVisibility={setVisibility}
      />

      {/* <FormLocation
      setTitle={setTitle}
      setDescription={setDescription}
      imageUrl={imageUrl.current}
      setCoordinates={setCoordinates}
      setHint={setHint} />
      
      <FormNarrative 
       setTitle={setTitle}
       setDescription={setDescription}
       imageUrl={imageUrl.current}
       />
       
      <FormQuestion
      setTitle={setTitle}
      setDescription={setDescription}
      imageUrl={imageUrl.current} 
      setQuestion={setQuestion}
      setAnswer={setAnswer}
      setHint={setHint} />
      
      <FormEnd 
       setTitle={setTitle}
       setDescription={setDescription}
       imageUrl={imageUrl.current}/> */}
    </div>
  );
};

export default ModuleForms;
