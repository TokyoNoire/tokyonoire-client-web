import React, { type FC, type ReactElement, useState } from "react";
import FadeDiv from "../../Components/Helpers/FadeDiv";

const Custom404: FC = (): ReactElement => {

    const [show] = useState<boolean>(true);

    return (
        <FadeDiv show={show}>
            <main className="w-screen h-screen flex justify-center items-center">
                <h1 className="text-5xl">How To Play</h1>
            </main>
        </FadeDiv>
    )
}
export default Custom404;