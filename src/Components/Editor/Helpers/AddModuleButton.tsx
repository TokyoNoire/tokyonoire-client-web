import React, {
  type ReactElement,
  type MouseEvent,
  type MouseEventHandler,
  useRef,
  useState,
  useContext,
} from "react";
import AppContext from "../../../AppContext";
import AddItemIcon from "../../../../public/addItemIcon-darkTheme.svg";
import CloseButton from "../../../../Assets/Icons/closeButton-darkTheme.svg";
import { GameModuleSchema } from "./GameSchema";
import { v4 as uuidv4 } from "uuid";

const moduleOptions = [
  "Narrative Block",
  "Go-To Location Block",
  "Question Block",
  "End Block",
];

const AddModuleButton = (): ReactElement => {
  const [renderMultiChoicePanel, setRenderMultiChoicePanel] =
    useState<boolean>(false);
  const value = useContext(AppContext);
  const { setGameModules, gameModules } = value;

  const plusButton = useRef<HTMLButtonElement>(null);

  const handleMultiChoicePanel = () => {
    if (!renderMultiChoicePanel) {
      setRenderMultiChoicePanel(true);
    }
    if (renderMultiChoicePanel) {
      setRenderMultiChoicePanel(false);
    }
  };

  const handleConsole = (event: MouseEvent, index: number) => {
    console.log(moduleOptions[index]);
    // console.log(newGameModule)
    const newGameModule = GameModuleSchema;
    switch (moduleOptions[index]) {
      case "Narrative Block":
        newGameModule.typeOfModule = "narrative";
        newGameModule._id = uuidv4();
        return setGameModules([...gameModules, newGameModule]);

      case "Go-To Location Block":
        newGameModule.typeOfModule = "location";
        newGameModule._id = uuidv4();
        return setGameModules([...gameModules, newGameModule]);

      case "Question Block":
        newGameModule.typeOfModule = "question";
        newGameModule._id = uuidv4();
        return setGameModules([...gameModules, newGameModule]);

      case "End Block":
        newGameModule.typeOfModule = "end";
        newGameModule._id = uuidv4();
        return setGameModules([...gameModules, newGameModule]);
    }
    console.log(newGameModule);
  };

  return (
    <>
      <div className="h-24 flex justify-center items-center">
        <div
          className="w-1/2 h-full flex justify-center items-center"
          // onClick={handleClickOutside}
        >
          <button className="w-fit h-fit">
            <AddItemIcon
              alt="Add Module Button"
              style={{ height: "4rem" }}
              onClick={handleMultiChoicePanel}
              ref={plusButton.current}
            />
          </button>

          {renderMultiChoicePanel && (
            <section
              className="w-fit h-fit border-4 rounded-lg bg-darkGrey absolute"
              style={{ transform: "translate(8rem, -8rem)" }}
            >
              <button
                className="absolute -right-4 -top-4 z-50 w-fit h-fit"
                onClick={handleMultiChoicePanel}
              >
                <CloseButton style={{ height: "30px" }} />
              </button>
              <div className="flex flex-col justify-center text-center items-center">
                {moduleOptions.map((module, index) => (
                  <button
                    className="p-3 w-full justify-center flex grow"
                    key={index}
                    onClick={(event) => handleConsole(event, index)}
                  >
                    {module}
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default AddModuleButton;
