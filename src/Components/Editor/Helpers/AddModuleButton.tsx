import React, {
    type ReactElement,
    useEffect,
    useRef,
    useState,
    MouseEventHandler,
} from "react";
import UseOutsideClick from "./UseOutsideClick";

type props = {

};

const AddModuleButton = (props: props): ReactElement => {
    const { } = props;

    const [renderMultiChoicePanel, setRenderMultiChoicePanel] = useState<boolean>(false);

    const handleClickOutside = () => {
        setRenderMultiChoicePanel(false);
    };

    // const plusButton = useRef<HTMLButtonElement>(UseOutsideClick(handleClickOutside))
    const plusButton = useRef<HTMLButtonElement>(null);
    UseOutsideClick(plusButton, setRenderMultiChoicePanel, false)


    const handleMultiChoicePanel = () => {
        if (!renderMultiChoicePanel) {
            setRenderMultiChoicePanel(true);
        }
    }

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        // console.log(e)
        console.log(e.clientX, " ", e.clientY)
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="h-24 flex justify-center items-center" onClick={handleClick}>
                <button
                    className="w-1/2 h-full border-darkGrey border-4"
                    onClick={handleMultiChoicePanel}
                    ref={plusButton}
                >
                    The Plus Button
                </button>
            </div>

            {renderMultiChoicePanel &&
                <section className="w-28 h-28 bg-darkGrey absolute">

                </section>
            }
        </>
    )
}

export default AddModuleButton;
