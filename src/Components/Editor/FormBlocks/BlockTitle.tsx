import React, { MutableRefObject, ReactElement, ReactNode, useContext } from "react";
import { TextField } from "@mui/material";

interface props {
    title: MutableRefObject<string>;
    placeholder?: string;
}

const BlockTitle = (props: props): ReactElement => {
    const { title, placeholder } = props;

    return (
        <TextField
            id="title"
            {...(title.current.length > 1 && { defaultValue: title.current })}
            {...(placeholder ? { placeholder: placeholder } : { placeholder: "Start writing here..." })}
            variant="standard"
            multiline
            minRows={1}
            maxRows={3}
            autoComplete="off"
            fullWidth
            sx={{ mt: "1.25rem", mb: "2rem" }}
            inputProps={{ style: { fontSize: "2rem", lineHeight: "2.5rem" }, maxLength: 50 }}
            onKeyDown={(e) => { if (e.code === "Enter") e.preventDefault() }}
            onChange={(e) => (title.current = e.target.value)}
        />
    )
}

export default BlockTitle;