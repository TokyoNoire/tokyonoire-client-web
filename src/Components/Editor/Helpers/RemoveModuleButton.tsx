import { type ReactElement, useContext, useState, type MouseEvent } from "react";
import AppContext from "../../../AppContext";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Menu, MenuItem } from "@mui/material";

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

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="absolute -top-1 -right-8 w-fit h-fit">
            <Button
                id="delete-button"
                aria-controls={open ? 'delete-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ "&:hover": { backgroundColor: "unset" }, minWidth: "unset", padding: "unset", color: "unset", borderRadius: "999px" }}
            >
                <MoreVertIcon />
            </Button>
            <Menu
                id="delete-menu"
                aria-labelledby="delete-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ transform: "translate(2rem)" }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <button onClick={handleRemoveModule}>Delete</button>
                </MenuItem>
            </Menu>

        </div >
    )
}

export default RemoveModuleButton;