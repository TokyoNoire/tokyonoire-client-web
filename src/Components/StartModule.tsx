import React, { type FC, type ReactElement } from "react";
import { Card, CardActions } from "@mui/material";
import Image from "next/image";
import heroImage from "public/Hero.jpg";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { AccessTime } from "@mui/icons-material";

type props = {
  _id: string;
  typeOfModule: string;
  title: string;
  description: string | null;
  answer: string | null;
  picture: string | null;
  locationCoordinates: string;
};

const StartModule: FC = (): ReactElement => {
  return (
    <div className="self-center w-4/5 m-10">
      <Card>
        <div className="self-center">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            TITLE OF STORY || START MODULE
          </h1>
          <p className="self-center pb-3 font-heading">AUTHOR&apos;S NAME</p>
          <div className="grid grid-cols-2 gap-1">
            <AccessTimeFilledIcon fontSize="small" />
            <p className="self-center font-heading">RATING</p>
            <p className="self-center text-xs font-body2">20 minutes</p>
            <p className="self-center font-body2">G</p>
          </div>
          <div className="self-center w-10/12 m-4">
            <Image
              src={heroImage}
              alt="Tokyo Noire Hero"
              className="rounded-lg"
            />
          </div>
          <p className="mt-2 text-justify px-14 font-body1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
        <CardActions>
          <button
            id="themeButton"
            className="mt-20 mb-5 font-body2"
            type="button"
          >
            start
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default StartModule;
