import React, {
    type ReactElement,
    type MouseEvent,
    type MouseEventHandler,
    useEffect,
    useRef,
    useState,
} from "react";
import UseOutsideClick from "./UseOutsideClick";
import AddItemIcon from "../../../../public/addItemIcon-darkTheme.svg";
import CloseButton from "../../../../Assets/Icons/closeButton-darkTheme.svg"

// type props = {
// };

const moduleOptions = [
    "Narrative Block",
    "Go-To Location Block",
    "Question Block",
    "End Block"
]


const AddModuleButton = (): ReactElement => {
    const [renderMultiChoicePanel, setRenderMultiChoicePanel] =
        useState<boolean>(false);

    const handleClickOutside = () => {
        setRenderMultiChoicePanel(false);
    };

    // const plusButton = useRef<HTMLButtonElement>(UseOutsideClick(handleClickOutside))
    const plusButton = useRef<HTMLButtonElement>(null);
    UseOutsideClick(plusButton, setRenderMultiChoicePanel, false);

    const handleMultiChoicePanel = () => {
        console.log(renderMultiChoicePanel)
        if (!renderMultiChoicePanel) {
            setRenderMultiChoicePanel(true);
        }
        if (renderMultiChoicePanel) {
            setRenderMultiChoicePanel(false);
        }
    };

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        // console.log(e)
        console.log(e.clientX, " ", e.clientY);
    };

    const handleConsole = (event: MouseEvent, index: number) => {
        console.log(moduleOptions[index])
    }



    return (
        <>
            <div
                className="h-24 flex justify-center items-center"
            >
                <div
                    className="w-1/2 h-full flex justify-center items-center"
                // onClick={handleClickOutside}
                >
                    <button
                        className="w-fit h-fit"
                    >
                        <AddItemIcon
                            alt="Add Module Button"
                            style={{ height: "4rem" }}
                            onClick={handleMultiChoicePanel}
                            ref={plusButton}
                        />
                    </button>

                    {renderMultiChoicePanel &&
                        <section
                            className="w-fit h-fit border-4 rounded-lg bg-darkGrey absolute"
                            style={{ transform: "translate(8rem, -8rem)", }}
                        >
                            <button
                                className="absolute -right-4 -top-4 z-50 w-fit h-fit"
                                onClick={handleMultiChoicePanel}
                            >
                                <CloseButton
                                    style={{ height: "30px" }}
                                />
                            </button>
                            <div className="flex flex-col justify-center text-center items-center">
                                {moduleOptions.map((module, index) => (
                                    <button className="p-3 w-full justify-center flex grow" key={index}
                                        onClick={event => handleConsole(event, index)}
                                    >
                                        {module}
                                    </button>
                                ))}
                            </div>
                        </section>
                    }
                </div>
            </div>

            {renderMultiChoicePanel && (
                <section className="w-28 h-28 bg-darkGrey absolute"></section>
            )}
        </>
    );
};

export default AddModuleButton;
