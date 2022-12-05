import React, { type FC, type ReactElement } from "react";
import { Card, CardActions } from "@mui/material";
import Image from "next/image";
import heroImage from "public/Hero.jpg";

const PictureModule: FC = (): ReactElement => {
  return (
    <div className="self-center w-4/5 m-10">
      <Card>
        <div className="self-center">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            Picture module
          </h1>
          <div className="self-center w-10/12 m-4">
            <Image
              src={heroImage}
              alt="Tokyo Noire Hero"
              className="rounded-lg"
            />
          </div>
          <p className="mt-2 text-left px-14 font-body1">
            Someone&apos;s come up missing, and there is a murder in the air.
            This scandalous discovery is only the tip of the iceberg. Salad is
            usually life, but it can also mean death.
          </p>
        </div>
        <CardActions>
          <button
            id="themeButton"
            className="mt-20 mb-5 font-heading"
            type="button"
          >
            start
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PictureModule;
