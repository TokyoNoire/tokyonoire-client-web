
import React, { ReactElement } from "react";
import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TextField } from "@mui/material";

interface props {
    handleModuleUpdateClick: () => void;
}

const BlockUpdateButton = (props: props): ReactElement => {
    const { handleModuleUpdateClick } = props;

    return (

        <button
            id="themeButton"
            className="self-center w-1/2 mt-10 mb-5"
            onClick={() => {
                handleModuleUpdateClick();
            }}
        >
            Update
        </button>
    )
}

export default BlockUpdateButton;