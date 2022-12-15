import React, { MutableRefObject, ReactElement, ReactNode, useContext } from "react";
import { TextField } from "@mui/material";

interface props {
    title: MutableRefObject<string>
}

const BlockTitle = (props: props): ReactElement => {
    const { title } = props;
    return (
        <TextField
            id="title"
            {...(title.current.length > 1 && { defaultValue: title.current })}
            placeholder="What's the title of this block?"
            variant="standard"
            multiline
            minRows={1}
            maxRows={3}
            autoComplete="off"
            fullWidth
            sx={{ mt: "1.5rem", mb: "2rem" }}
            inputProps={{ style: { fontSize: "2rem", lineHeight: "2.5rem" }, maxLength: 50 }}
            onKeyDown={(e) => { if (e.code === "Enter") e.preventDefault() }}
            onChange={(e) => (title.current = e.target.value)}
        />
    )
}

export default BlockTitle;