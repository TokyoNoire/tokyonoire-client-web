import React, { type FC, type ReactElement } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import FormLocation from "./FormLocation";
import FormNarrative from "./FormNarrative";
import FormQuestion from "./FormQuestion";
import FormEnd from "./FormEnd";
import FormStoryInformation from "./FormStoryInformation";

const ModuleForms: FC = (): ReactElement => {
  return (
     <div className="relative w-full h-full px-6 py-4 rounded shadow-lg  flexCenterDiv bg-darkGrey shadow-slate-100">
      <FormStoryInformation/>

        {/* <FormLocation/>
        <FormNarrative/>
        <FormQuestion/>
        <FormEnd/> */}
    </div>
  );
};

export default ModuleForms;
