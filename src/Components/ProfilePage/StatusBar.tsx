import React, { type FC, type ReactElement } from "react";
import { AutoStoriesTwoTone } from "@mui/icons-material";
import AccessTimeFilled from "@mui/icons-material/AccessTimeFilled";
import MapIcon from "@mui/icons-material/Map";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";

const StatusBar: FC = (): ReactElement => {
  return (
    <div className="w-screen mb-5 shadow-inner shadow-gray-500 flexCenterDiv h-36 bg-darkGrey">
      <h1 className="text-xl text-center font-heading">
      &quot;Welcome back Detective, here is your current status.&quot;
      </h1>
      <div className="grid grid-cols-4 grid-rows-3 gap-1 mt-5 rounded-md low-col place-items-center">
        <ScoreboardIcon fontSize="small" />
        <MapIcon fontSize="small" />
        <AccessTimeFilled fontSize="small" />
        <AutoStoriesTwoTone fontSize="small" />
        <p className="text-sm uppercase font-body2">points</p>
        <p className="text-sm uppercase font-body2">distance</p>
        <p className="text-sm uppercase font-body2">time in game</p>
        <p className="text-sm uppercase font-body2">completed</p>
        <p className="text-xs uppercase font-body2">0</p>
        <p className="text-xs uppercase font-body2">0 </p>
        <p className="text-xs uppercase font-body2">0 minutes</p>
        <p className="text-xs uppercase font-body2">0 stories</p>
      </div>
    </div>
  );
};

export default StatusBar;