import React, {
  type ReactElement,
  type MouseEvent,
  useRef,
  useState,
  useContext,
} from "react";
import AppContext from "../../../AppContext";
import AddItemIcon from "../../../../public/addItemIcon-darkTheme.svg";
import CloseButton from "../../../../Assets/Icons/closeButton-darkTheme.svg";
import { GameModuleSchema } from "./GameSchema";
import { v4 as uuidv4 } from "uuid";
import ModuleOptions from "./ModuleOptions";
import AddIcon from '@mui/icons-material/Add';
import { Menu, Button, MenuItem } from "@mui/material";

const AddModuleButton = (): ReactElement => {
  const [renderMultiChoicePanel, setRenderMultiChoicePanel] = useState<boolean>(false);
  const value = useContext(AppContext);
  const { setGameModules, gameModules } = value;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };


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
    const newGameModule = new GameModuleSchema();
    newGameModule._id = uuidv4();
    const newGameModulesList = [...gameModules]
    switch (ModuleOptions[index]) {
      case "Narrative Block":
        newGameModule.typeOfModule = "narrative";
        newGameModule.title = "New Narrative Block";
        newGameModulesList.splice(newGameModulesList.length - 1, 0, newGameModule);
        return setGameModules(newGameModulesList);

      case "Go-To Location Block":
        newGameModule.typeOfModule = "location";
        newGameModule.title = "New Go-To Location Block";
        newGameModulesList.splice(newGameModulesList.length - 1, 0, newGameModule);
        return setGameModules(newGameModulesList);

      case "Question Block":
        newGameModule.typeOfModule = "question";
        newGameModule.title = "New Question Block";
        newGameModulesList.splice(newGameModulesList.length - 1, 0, newGameModule);
        return setGameModules(newGameModulesList);
    }
    console.log(newGameModule);
  };

  return (
    <>
      <div className="h-24 flex justify-center items-center">
        <div
          className="w-1/2 h-full flex justify-center items-center"
        >
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{ width: "4rem", height: "4rem", borderRadius: "999px" }}
            >
              <AddIcon style={{ color: "white", transform: "scale(2)" }} />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
            >
              {ModuleOptions.map((module, index) => (
                <MenuItem
                  className="p-3 w-full justify-center flex grow"
                  key={index}
                  onClick={(event) => { handleConsole(event, index); handleClose(); }}
                >
                  {module}
                </MenuItem>
              ))}
            </Menu>
          </div>


          {/* 
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
                {ModuleOptions.map((module, index) => (
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
          )} */}
        </div>
      </div>
    </>
  );
};

export default AddModuleButton;
