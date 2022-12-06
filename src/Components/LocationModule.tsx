import React, { type FC, type ReactElement, useEffect, useRef, useState } from "react";
import { Card } from "@mui/material";
import Image from "next/image";
import heroImage from "public/Hero.jpg";

const LocationModule: FC = (): ReactElement => {
  
  return (
    <>
      <div className="self-center w-4/5 m-5">
        <Card>
          <div className="self-center mb-5">
            <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
              location based block
            </h1>
            <div className="self-center w-10/12 m-4">
              <Image
                src={heroImage}
                alt="Tokyo Noire Hero"
                className="rounded-lg"
              />
            </div>
            <p className="px-6 mt-2 text-justify font-body1">
              Placeholder text where the user would give hints, or a reminder of what they are looking for and where they are headed.
            </p>
          </div>
        </Card>
      </div>
      {/* <div className="items-center mx-8 my-48">
      </div> */}
    </>
  );
};

export default LocationModule;