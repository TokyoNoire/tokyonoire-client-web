import React, { MutableRefObject, ReactElement, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MapLocationPicker from "../Helpers/MapLocationPicker";

interface props {
    locationCoordinates: MutableRefObject<number[] | null>;
}

const BlockLocationPicker = (props: props): ReactElement => {
    const { locationCoordinates } = props;

    const [visualCoords, setVisualCoords] = useState<number[] | null>(locationCoordinates.current);

    return (

        <>
            <div className="flex justify-between mt-10 gap-2 items-baseline">
                <div className="flex">

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

                <p>
                    {visualCoords && visualCoords[0] && visualCoords[1]
                        ? `[${visualCoords[1].toFixed(5)}, ${visualCoords[0].toFixed(5)}]`
                        : null}
                </p>
            </div>

            <MapLocationPicker locationCoordinates={locationCoordinates} setVisualCoords={setVisualCoords} />
        </>
    );
}

export default BlockLocationPicker;