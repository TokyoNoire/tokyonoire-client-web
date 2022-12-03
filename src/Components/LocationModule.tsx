import React, {type FC, type ReactElement} from "react";
import Geolocation from "./Geolocation";

const LocationModule: FC = (): ReactElement => {
  return (
    <div>
      <Geolocation/>
    </div>
  );
};

export default LocationModule;
