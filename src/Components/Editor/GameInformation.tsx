import React, {
  type FC,
  type ReactElement,
  type MutableRefObject,
  type ChangeEvent,
  type ChangeEventHandler,
  useState
} from "react";
import ImageWidget from "./FormBlocks/BlockImageWidget";
import AppContext from "../../AppContext";
import { saveGameInfo } from "../../types/global";
import { useContext } from "react";
import { TextField, FormControl, Select, MenuItem, InputLabel, type SelectChangeEvent } from "@mui/material";
import ContainerForm from "./FormBlocks/ContainerForm";
import BlockTitle from "./FormBlocks/BlockTitle";
import BlockStory from "./FormBlocks/BlockStory";
import ContainerGameInfo from "./FormBlocks/ContainerGameInfo";

interface prop {
  titleOfGame: MutableRefObject<string>;
  gameDescription: MutableRefObject<string>;
  estimatedTimeMinutes: MutableRefObject<string>;
  rating: MutableRefObject<string>;
  isPublished: MutableRefObject<string>;
  isPrivate: MutableRefObject<string>;
  startingLocationCoordinates: MutableRefObject<number[] | null>;
  gameImageURL: MutableRefObject<string>;
  handleGameInfoModuleUpdateClick: () => void;
}

const GameInformation = (prop: prop): ReactElement => {
  //Build is not happy if I set these as let, so I seperated them for now.
  const {
    titleOfGame,
    gameDescription,
    estimatedTimeMinutes,
    rating,
    isPublished,
    isPrivate,
    startingLocationCoordinates,
    gameImageURL,
    handleGameInfoModuleUpdateClick,
  } = prop;

  const [visualRating, setVisualRating] = useState<string>(rating.current);
  const handleRatingChange = (event: SelectChangeEvent<string>) => {
    setVisualRating(event.target.value)
    rating.current = event.target.value;
  };

  const [visualVisibility, setVisualVisibility] = useState<string>(isPrivate.current);
  const handleVisibilityChange = (event: SelectChangeEvent<string>) => {
    setVisualVisibility(event.target.value)
    isPrivate.current = event.target.value;
  };

  return (
    <ContainerGameInfo handleGameInfoModuleUpdateClick={handleGameInfoModuleUpdateClick}>

      <BlockTitle title={titleOfGame} placeholder={"What is this case called?"} />

      <div className="grid grid-cols-3 gap-3 grid-flow-col mb-6">

        <FormControl sx={{ minWidth: 60 }}>
          <TextField
            id="estimated-time"
            label="Game Duration Estimate"
            type="number"
            {...(estimatedTimeMinutes.current !== "0"
              ? { defaultValue: estimatedTimeMinutes.current }
              : { placeholder: "0" })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <FormControl sx={{ minWidth: 60 }}>
          <InputLabel id="rating-label">Rating</InputLabel>
          <Select
            MenuProps={{
              disableScrollLock: true,
            }}
            labelId="rating"
            id="rating"
            value={visualRating ? visualRating : ''}
            onChange={(e) => { handleRatingChange(e) }}
            label="rating"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"G"}>G</MenuItem>
            <MenuItem value={"PG"}>PG</MenuItem>
            <MenuItem value={"PG-13"}>PG-13</MenuItem>
            <MenuItem value={"R"}>R</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 60 }}>
          <InputLabel id="visibility-label">Visibility</InputLabel>
          <Select
            MenuProps={{
              disableScrollLock: true,
            }}
            labelId="visibility"
            id="visibility"
            value={visualVisibility ? visualVisibility : 'Public'}
            onChange={(e) => { handleVisibilityChange(e) }}
            label="visibility"
          >
            <MenuItem value={"Public"}>Public</MenuItem>
            <MenuItem value={"Private"}>Private</MenuItem>
          </Select>
        </FormControl>

      </div>

      <ImageWidget imageURL={gameImageURL} />

      <BlockStory
        description={gameDescription}
        header="Abstract"
        tip="A short abstract to get players excited about your game."
      />

    </ContainerGameInfo>
  );
};

export default GameInformation;