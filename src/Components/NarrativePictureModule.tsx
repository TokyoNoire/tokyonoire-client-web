import React, { type FC, type ReactElement } from "react";
import { Card, CardActions } from "@mui/material";
import Image from "next/image";
import heroImage from "public/Hero.jpg";

type props = {
  _id: string;
  typeOfModule: string;
  title: string;
  description: string | null;
  answer: string | null;
  picture: string | null;
  locationCoordinates: string;
};

const NarrativePictureModule: FC = (): ReactElement => {
  return (
    <div className="self-center w-4/5 m-10">
      <Card>
        <div className="self-center">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            TITLE OF NARRATIVE BLOCK
          </h1>

          <div className="self-center w-10/12 m-4">
            <Image
              src={heroImage}
              alt="Tokyo Noire Hero"
              className="rounded-lg"
            />
          </div>
          <p className="px-6 mt-2 font-body1">
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
            className="mt-20 mb-5 font-heading"
            type="button"
          >
            NEXT
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NarrativePictureModule;
