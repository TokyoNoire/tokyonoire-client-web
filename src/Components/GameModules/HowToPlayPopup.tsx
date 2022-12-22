import React, { type ReactElement, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import FadeDiv from "../Helpers/FadeDiv";

interface props {
    setDevicePermission: React.Dispatch<React.SetStateAction<boolean>>
}

const HowToPlayPopup = (props: props): ReactElement => {

    const { setDevicePermission } = props;
    const [open, setOpen] = useState<boolean>(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <FadeDiv>
            <div className="flexCenterDiv">
                <Dialog open={open} onClose={handleClose}>
                    <h1 className="self-center p-5 text-3xl text-center uppercase font-heading">
                        How to Play
                    </h1>
                    <DialogContent>
                        <p className="text-left font-body1">
                           Hello detective, here are the general guidelines for how to play this game.
                           <br />
            <br />
             There are three game blocks you will encounter: a narrative block, question block and a location block. A narrative block holds parts of the story. A question block will prompt you to answer a question. A location block will give you directives to your next location. If you feel stuck in any way, you could press the button with a question mark with a hint from the author.
             <br />
            <br />
             There will be blocks of text needed to read so be mindful where you stand. Stay safe detective and we're waiting for your report.
                        </p>
                    </DialogContent>
                    <DialogActions className="flexCenterDiv">
                        <button
                            onClick={() => {
                                handleClose();
                            }}
                            id="themeButton"
                            className="self-center my-5 font-heading"
                            type="button"
                        >
                            I understand
                        </button>
                    </DialogActions>
                </Dialog>
            </div>
        </FadeDiv>
    )
};

export default HowToPlayPopup;