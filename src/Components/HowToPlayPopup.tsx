import React, { type FC, type ReactElement, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import Gyroscope from "./Helpers/Gyroscope";

const HowToPlayPopup: FC = (): ReactElement => {
    const [open, setOpen] = useState<boolean>(true);
    const { requestAccessAsync } = Gyroscope();

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDevicePermissions = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
            });
        }
        else console.error('geolocation unavailable')
    }


    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <h1 className="self-center p-5 text-3xl text-center uppercase font-heading">
                        How to Play
                    </h1>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p className="text-left font-body1">
                            For an optimal game experience, we recommend enabling location services for your web browser.
                            <br />
                            <br />
                            The game requests access to your current geolocation and your gyroscope to guide you to the different game locations.
                            We currently do not store any of your device data.
                            <br />
                            <br />
                            By clicking &quot;I understand&quot;, you will be prompted to enable geolocation and gyroscope functionalities.
                        </p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button
                        onClick={() => {
                            handleClose();
                            handleDevicePermissions();
                        }}
                        id="themeButton"
                        className="my-5 font-body2"
                        type="button"
                    >
                        I understand
                    </button>
                </DialogActions>
            </Dialog>
        </div>)
};

export default HowToPlayPopup;