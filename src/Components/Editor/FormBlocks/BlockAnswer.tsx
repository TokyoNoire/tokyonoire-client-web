import React, { MutableRefObject, ReactElement } from "react";
import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TextField } from "@mui/material";

interface props {
    answer: MutableRefObject<string>;
}

const BlockAnswer = (props: props): ReactElement => {
    const { answer } = props;

    return (
        <>
            <div className="flex mt-10 gap-2">
                <p className="text-2xl uppercase font-heading">Answer</p>
                <div>
                    <Tooltip
                        title="Capitalisation doesn't matter when validating an answer. (Max. 150 characters)"
                        placement="right-end"
                    >
                        <InfoOutlinedIcon fontSize="small" />
                    </Tooltip>
                </div>
            </div>
            <TextField
                {...(answer.current && { defaultValue: answer.current })}
                placeholder="The answer to your question is..."
                fullWidth
                autoComplete="off"
                onChange={(e) => (answer.current = e.target.value)}
                inputProps={{ maxLength: 150 }}
                onKeyDown={(e) => { if (e.code === "Enter") e.preventDefault() }}
                multiline
                maxRows={5}
            />
        </>
    )
}

export default BlockAnswer;