import { type ReactElement, useContext } from "react";
import AppContext from "../../../AppContext";

interface props {
    arrID: number;
}

const RemoveModuleButton = (props: props): ReactElement => {
    const { arrID } = props;
    const value = useContext(AppContext);
    const { setGameModules, gameModules } = value;

    const handleRemoveModule = () => {
        const newGameModulesList = [...gameModules]
        newGameModulesList.splice(arrID, 1)
        return setGameModules(newGameModulesList)
    }

    return (
        <>
            <button
                className="w-fit h-fit bg-[#92079b]"
                onClick={handleRemoveModule}
            >
                Delete
            </button>
        </>
    )

}

export default RemoveModuleButton;