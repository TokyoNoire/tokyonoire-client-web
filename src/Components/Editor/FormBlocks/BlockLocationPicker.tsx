import React, { MutableRefObject, ReactElement } from "react";
import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MapLocationPicker from "../Helpers/MapLocationPicker";

interface props {
    locationCoordinates: MutableRefObject<number[] | null>;
}

const BlockLocationPicker = (props: props): ReactElement => {
    const { locationCoordinates } = props;

    return (

        <>
            <div className="flex mt-10 gap-2">
                <p className="text-2xl uppercase font-heading">Location</p>
                <div>
                    <Tooltip
                        title="Mark a location the user will have to go to progess the story.
                         Any location has a tolerance radius of 50 meters.
                         Keep it somewhere public and safe!"
                        placement="right-end"
                    >
                        <InfoOutlinedIcon fontSize="small" />
                    </Tooltip>
                </div>
            </div>

            <MapLocationPicker locationCoordinates={locationCoordinates} />
        </>
    );
}

export default BlockLocationPicker;