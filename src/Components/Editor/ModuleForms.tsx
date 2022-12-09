import React, { type FC, type ReactElement, useState } from "react";
import FormLocation from "./FormLocation";
import FormNarrative from "./FormNarrative";
import FormQuestion from "./FormQuestion";
import FormEnd from "./FormEnd";
import FormStoryInformation from "./FormStoryInformation";

const ModuleForms: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [coordinates, setCoordinates] = useState<number[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [hint, setHint] = useState<string>("");

  return (
    <div className="relative w-full h-full px-6 py-4 rounded shadow-lg flexCenterDiv bg-darkGrey shadow-slate-100">
      <FormStoryInformation
        setTitle={setTitle}
        setDescription={setDescription}
        setImage={setImage}
        setMinutes={setMinutes}
        setRating={setRating}
        setVisibility={setVisibility}
      />

      <FormLocation
      setTitle={setTitle}
      setDescription={setDescription}
      setImage={setImage}
      setCoordinates={setCoordinates}
      setHint={setHint} />
      
      <FormNarrative 
       setTitle={setTitle}
       setDescription={setDescription}
       setImage={setImage}
       />
       
      <FormQuestion
      setTitle={setTitle}
      setDescription={setDescription}
      setImage={setImage} 
      setQuestion={setQuestion}
      setAnswer={setAnswer}
      setHint={setHint} />
      
      <FormEnd 
       setTitle={setTitle}
       setDescription={setDescription}
       setImage={setImage}/>
    </div>
  );
};

export default ModuleForms;
