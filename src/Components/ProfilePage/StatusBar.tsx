import React, { type FC, type ReactElement } from "react";
import { AutoStoriesTwoTone } from "@mui/icons-material";
import AccessTimeFilled from "@mui/icons-material/AccessTimeFilled";
import MapIcon from '@mui/icons-material/Map';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';

const StatusBar: FC = (): ReactElement => {
  return (
    <div className = "w-screen p-5 m-5 h-15 bg-darkGrey">
      <h1 className="text-xl text-center font-heading">"Welcome back Detective, here is your current status."</h1>
      <div className="grid self-center grid-cols-4 gap-1 mt-10 text-center place-items-center gri d-rows-3 low-col center">
        <ScoreboardIcon fontSize="small"/>
        <MapIcon fontSize="small" />
        <AccessTimeFilled fontSize="small" />
        <AutoStoriesTwoTone fontSize="small"/>
        <p className="text-sm uppercase font-body2">points</p>
        <p className="text-sm uppercase font-body2">distance</p>
        <p className="text-sm uppercase font-body2">time in game</p>
        <p className="text-sm uppercase font-body2">completed</p>
        <p className="text-xs uppercase font-body2">0 points</p>
        <p className="text-xs uppercase font-body2">0 distance</p>
        <p className="text-xs uppercase font-body2">0 minutes</p>
        <p className="text-xs uppercase font-body2">0 stories</p>
      </div>
    </div>
  );
};

export default StatusBar;
