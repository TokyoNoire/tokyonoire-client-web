import React, { MutableRefObject, ReactElement, ReactNode, useContext, useState } from "react";
import { TextField } from "@mui/material";

interface props {
    title: MutableRefObject<string>;
    placeholder?: string;
}

const BlockTitle = (props: props): ReactElement => {
    const { title, placeholder } = props;

    const [visualTitle, setVisualTitle] = useState<string>(title.current)

    return (
        <TextField
            id="title"
            {...(title.current.length > 1 && { defaultValue: title.current })}
            {...(placeholder ? { placeholder: placeholder } : { placeholder: "What is this block's title?" })}
            variant="standard"
            multiline
            {...(
                visualTitle === "New Go-To Location Block"
                    || visualTitle === "New Question Block"
                    || visualTitle === "New Narrative Block"
                    ? { helperText: "Replace me!" }
                    : { helperText: "" }
            )}
            minRows={1}
            maxRows={3}
            autoComplete="off"
            fullWidth
            sx={{ mt: "1.25rem", mb: "2rem" }}
            inputProps={{ style: { fontSize: "2rem", lineHeight: "2.5rem" }, maxLength: 50 }}
            onKeyDown={(e) => { if (e.code === "Enter") e.preventDefault() }}
            onChange={(e) => {
                title.current = e.target.value;
                setVisualTitle(title.current)
            }}
        />
    )
}

export default BlockTitle;