import React, {type FC, type ReactElement} from "react";
import LocationModule from "../../Components/LocationModule";
import UseDeviceOrientation from "../../Components/GyroscopeModule";

const Game: FC = (): ReactElement => {
  return (
    <div>
      <LocationModule/>
      <UseDeviceOrientation/>
    </div>
  );
};

export default Game;
