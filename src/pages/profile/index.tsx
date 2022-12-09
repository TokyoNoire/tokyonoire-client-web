import { type NextPage } from "next";
import { useState } from "react";
import FadeDiv from "../../Components/Helpers/FadeDiv";
// import Link from "next/link";

const HowToPlay: NextPage = () => {

  const [show, setShow] = useState<boolean>(true);

  return (
    <FadeDiv show={show}>
      <main className="w-screen h-screen flex justify-center items-center">
        <h1 className="text-5xl">Profile Page</h1>
      </main>
    </FadeDiv>
  );
};

export default HowToPlay;
