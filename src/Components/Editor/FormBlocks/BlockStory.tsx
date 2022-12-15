import React, { MutableRefObject, ReactElement } from "react";
import { TextField } from "@mui/material";
import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


interface props {
    description: MutableRefObject<string>
}

const BlockStory = (props: props): ReactElement => {
    const { description } = props;

    return (
        <>
            <div className="flex mt-10 gap-2">
                <p className="text-2xl uppercase font-heading">
                    Story
                </p>
                <div>
                    <Tooltip
                        title="This is the main text section where you give context for your story."
                        placement="right-end"
                    >
                        <InfoOutlinedIcon fontSize="small" />
                    </Tooltip>
                </div>
            </div>
            <TextField
                multiline
                minRows={5}
                maxRows={20}
                autoComplete="off"
                {...(description.current.length > 1 && { defaultValue: description.current })}
                placeholder="Start writing here..."
                inputProps={{ className: "scrollbar", maxLength: 2000 }}
                variant="outlined"
                fullWidth
                onChange={(e) => (description.current = e.target.value)}
            />
        </>
    )

}

export default BlockStory;