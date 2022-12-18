import React, { type ReactElement, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";

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
        <div className="flexCenterDiv">
            <Dialog open={open} onClose={handleClose}>
                <h1 className="self-center p-5 text-3xl text-center uppercase font-heading">
                        How to Play
                </h1>
                <DialogContent>
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
                </DialogContent>
                <DialogActions className="flexCenterDiv">
                    <button
                        onClick={() => {
                            setDevicePermission(true);
                            handleClose();
                        }}
                        id="themeButton"
                        className="self-center my-5"
                        type="button"
                    >
                        I understand
                    </button>
                </DialogActions>
            </Dialog>
        </div>)
};

export default HowToPlayPopup;