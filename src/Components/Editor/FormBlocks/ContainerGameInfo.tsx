import React, { MutableRefObject, ReactElement, ReactNode, useContext } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AppContext from "../../../AppContext";

interface props {
    children?: ReactNode;
    handleGameInfoModuleUpdateClick: () => void;

}

const ContainerGameInfo = (props: props): ReactElement => {
    const { children, handleGameInfoModuleUpdateClick } = props;

    return (
        <section
            className="relative w-full flex flex-col justify-between rounded-lg border-2 border-[#353535] bg-black shadow-lg  shadow-slate-100"
            style={{ height: "calc(100vh - 10rem)" }}
        >
            <h1 className="w-full text-center font-bold border-b border-[#353535] text-3xl uppercase font-heading py-2  ">
                General Information
            </h1>

            <div
                className="scrollbar__forms overflow-x-hidden overflow-y-auto px-6 py-4"
                style={{ scrollbarGutter: "stable" }}
            >
                {children}
            </div>

            <button
                className="bottom-0 text-2xl self-center w-full py-3 border-t border-[#353535] hover:bg-[#272727] rounded-b-md transition"
                onClick={() => {
                    handleGameInfoModuleUpdateClick();
                }}
            >
                Update
            </button>

        </section>
    )
}

export default ContainerGameInfo;