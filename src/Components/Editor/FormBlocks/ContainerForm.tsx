import React, { MutableRefObject, ReactElement, ReactNode, useContext } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AppContext from "../../../AppContext";

interface props {
    typeOfModule: MutableRefObject<string>;
    children?: ReactNode;
    handleModuleUpdateClick: () => void;

}

const ContainerForm = (props: props): ReactElement => {
    const { typeOfModule, children, handleModuleUpdateClick } = props;

    const value = useContext(AppContext);
    const { setActiveModule } = value;

    const handleClose = () => {
        setActiveModule(null);
    };

    return (
        <section
            className="relative w-full flex flex-col justify-between rounded-lg border-2 border-[#353535] bg-black shadow-lg  shadow-slate-100"
            style={{ height: "calc(100vh - 10rem)" }}
        >
            <div className="absolute z-50 flex justify-center items-center -top-4 -right-3 w-8 h-8 rounded-full bg-black border-2">
                <ClearIcon
                    className="hover:shadow-indigo-500/40"
                    style={{ transform: "scale(1.2)" }}
                    onClick={handleClose}
                />
            </div>

            <div className="origin-bottom-left absolute -translate-y-7 translate-x-2">
                <h1 className="self-center text-xl  uppercase font-heading">
                    {`${typeOfModule.current}`}
                </h1>
            </div>

            <div className="scrollbar__forms overflow-x-hidden overflow-y-auto px-6 py-4"
                style={{ scrollbarGutter: "stable" }}
            >
                {children}
            </div>

            <button
                className="bottom-0 text-2xl self-center w-full py-3 border-t border-[#353535] hover:bg-[#272727] rounded-b-md transition"
                onClick={() => {
                    handleModuleUpdateClick();
                }}
            >
                Update
            </button>

        </section>
    )
}

export default ContainerForm;