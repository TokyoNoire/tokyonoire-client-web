import React, { type FC, type ReactElement, useState, useEffect, useRef } from "react";
import FadeDiv from "../Components/Helpers/FadeDiv";

const Custom404: FC = (): ReactElement => {
    return (
        <main className="w-screen h-screen flex items-center justify-center text-4xl">
            404 | Not Found
        </main>
    )
}
export default Custom404;