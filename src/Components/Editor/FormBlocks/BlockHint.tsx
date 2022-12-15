import React, { MutableRefObject, ReactElement } from "react";
import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TextField } from "@mui/material";

interface props {
    hint: MutableRefObject<string>;
}

const BlockHint = (props: props): ReactElement => {
    const { hint } = props;


    return (
        <>
            <div className="flex mt-10 gap-2">
                <p className="text-2xl uppercase font-heading">Hint</p>
                <div>
                    <Tooltip
                        title="You can give the player a hint that will appear after 
                        a while if they cannot find the right place. 
                        (Max. 150 characters)"
                        placement="right-end"
                    >
                        <InfoOutlinedIcon fontSize="small" />
                    </Tooltip>
                </div>
            </div>
            <TextField
                {...(hint.current && { defaultValue: hint.current })}
                placeholder="Give a hint for the player!"
                fullWidth
                autoComplete="off"
                onChange={(e) => (hint.current = e.target.value)}
                inputProps={{ maxLength: 150 }}
                onKeyDown={(e) => { if (e.code === "Enter") e.preventDefault() }}
                multiline
                maxRows={5}
            />
        </>
    )
}

export default BlockHint;