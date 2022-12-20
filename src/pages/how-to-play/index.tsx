import { type NextPage } from "next";
import { useState } from "react";
import FadeDiv from "../../Components/Helpers/FadeDiv";

const HowToPlay: NextPage = () => {

    const [show, setShow] = useState<boolean>(true);

    return (
        <FadeDiv show={show}>
            <main className="flex items-center justify-center w-screen h-screen">
                <h1 className="text-5xl">How To Play</h1>
            </main>
        </FadeDiv>
    );
};

export default HowToPlay;
