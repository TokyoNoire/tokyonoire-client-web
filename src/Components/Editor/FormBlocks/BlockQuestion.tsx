
import React, { MutableRefObject, ReactElement } from "react";
import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { TextField } from "@mui/material";

interface props {
    question: MutableRefObject<string>;
}

const BlockQuestion = (props: props): ReactElement => {
    const { question } = props;


    return (
        <>
            <div className="flex mt-10 gap-2">
                <p className="text-2xl uppercase font-heading">Question</p>
                <div>
                    <Tooltip
                        title="The player must find the right answer to this question to progress. (Max. 150 characters)"
                        placement="right-end"
                    >
                        <InfoOutlinedIcon fontSize="small" />
                    </Tooltip>
                </div>
            </div>
            <TextField
                {...(question.current && { defaultValue: question.current })}
                placeholder="What question do you want to ask?"
                fullWidth
                autoComplete="off"
                onChange={(e) => (question.current = e.target.value)}
                onKeyDown={(e) => { if (e.code === "Enter") e.preventDefault() }}
                inputProps={{ maxLength: 150 }}
                multiline
                maxRows={5}
            />
        </>
    )
}

export default BlockQuestion;