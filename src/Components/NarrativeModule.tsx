import React, { type FC, type ReactElement } from "react";
import {Card, CardActions} from "@mui/material";
import Image from "next/image";
import heroImage from "public/Hero.jpg";

const NarrativeModule: FC = (): ReactElement => {





//   <Card>
//   <div className="self-center">
//     <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
//       The salad murder mysteries
//     </h1>
//     <p className = "self-center font-heading">Salad is Life</p>
//     <div className="self-center w-10/12 m-4">
//       <Image src={heroImage} alt="Tokyo Noire Hero" className="rounded-lg" />
//     </div>
//     <p className="mt-2 text-left px-14 font-body1">Someone&apos;s come up missing, and there is a murder in the air. This scandalous discovery is only the tip of the iceberg. Salad is usually life, but it can also mean death.</p>
//   </div>
//   <CardActions>
//   <button id="themeButton" className="mt-20 mb-5 font-body2" type="button">
//   start
// </button>
//   </CardActions>
// </Card>
  
  return (
    <div className="self-center w-4/5 m-10">
      <Card>
        <div className="self-center">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            The salad murder mysteries
          </h1>
          <p className = "self-center font-heading">Salad is Life</p>
          <div className="self-center w-10/12 m-4">
            <Image src={heroImage} alt="Tokyo Noire Hero" className="rounded-lg" />
          </div>
          <p className="mt-2 text-left px-14 font-body1">Someone&apos;s come up missing, and there is a murder in the air. This scandalous discovery is only the tip of the iceberg. Salad is usually life, but it can also mean death.</p>
        </div>
        <CardActions>
        <button id="themeButton" className="mt-20 mb-5 font-body2" type="button">
        start
      </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NarrativeModule;
