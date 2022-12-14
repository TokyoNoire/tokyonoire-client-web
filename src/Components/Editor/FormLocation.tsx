import React, {
  type ReactElement,
  type MutableRefObject,
  useContext,
} from "react";
import AppContext from "../../AppContext";
import ClearIcon from "@mui/icons-material/Clear";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TextField from "@mui/material/TextField";
import MapLocationPicker from "./MapLocationPicker";
import ImageWidget from "./ImageWidget";
import { kMaxLength } from "buffer";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material";

interface props {
  title: MutableRefObject<string>;
  description: MutableRefObject<string>;
  coordinates: MutableRefObject<number[] | null>;
  imageUrl: MutableRefObject<string>;
  hint: MutableRefObject<string>;
  handleModuleUpdateClick: () => void;
}

const FormLocation = (props: props): ReactElement => {
  const { title, description, coordinates, imageUrl, hint, handleModuleUpdateClick } = props;
  const value = useContext(AppContext);
  const { setActiveModule } = value;

  const handleClose = () => {
    setActiveModule(null);
  };

  console.log(hint)

  return (
    <>
      <section
        className="relative w-full justify-start flex flex-col  rounded shadow-lg bg-darkGrey shadow-slate-100"
        style={{ height: "calc(100vh - 10rem)" }}
      >

        <div className="absolute z-50 flex justify-center items-center -top-4 -right-3 w-8 h-8 rounded-full bg-darkGrey border-2">
          <ClearIcon
            className="hover:shadow-indigo-500/40"
            style={{ transform: "scale(1.2)" }}
            onClick={handleClose}
          />
        </div>

        <div className="absolute -top-8 left-0 w-fit h-fit bg-[#50d71e]">
          <h1 className="self-center text-2xl font-bold uppercase font-heading">
            Location
          </h1>

        </div>

        <div className="scrollbar overflow-x-hidden overflow-y-auto px-6 py-4">


          {/* <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">Title</p> */}
          <TextField
            id="title"
            {...(title.current.length > 1 && { defaultValue: title.current })}
            placeholder="What's the title of this block?"
            variant="standard"
            multiline
            minRows={1}
            maxRows={3}
            autoComplete="off"
            fullWidth
            sx={{ my: "2rem" }}
            inputProps={{ className: "scrollbar", style: { fontSize: "2rem", lineHeight: "2.5rem" }, maxLength: 50 }}
            onChange={(e) => (title.current = e.target.value)}
          />
          {/* 
          <p className="mt-10 mb-2 ml-2 text-sm uppercase font-heading">
            Image Upload
          </p> */}

          <ImageWidget imageUrl={imageUrl} />

          <div className="flex mt-10 gap-2">
            <p className="text-2xl uppercase font-heading">
              Description
            </p>
            <div>
              <Tooltip
                title="This is the main text section where you give context for your story."
                placement="right-end"
              >
                <InfoOutlinedIcon fontSize="small" />
              </Tooltip>
            </div>
          </div>
          <TextField
            multiline
            minRows={5}
            maxRows={20}
            autoComplete="off"
            {...(description.current.length > 1 && { defaultValue: description.current })}
            placeholder="Start writing here..."
            inputProps={{ className: "scrollbar" }}
            variant="outlined"
            fullWidth
            onChange={(e) => (description.current = e.target.value)}
          />

          <div className="flex mt-10 gap-2">
            <p className="text-2xl uppercase font-heading">Location</p>
            <div>
              <Tooltip
                title="This is the place the user will have to go to progess the story. Keep it somewhere public and safe!"
                placement="right-end"
              >
                <InfoOutlinedIcon fontSize="small" />
              </Tooltip>
            </div>
          </div>

          <MapLocationPicker />

          <div className="flex mt-10 gap-2">
            <p className="text-2xl uppercase font-heading">Hint</p>
            <div>
              <Tooltip
                title="You can give the player a hint that will appear after a while if they cannot find the right place."
                placement="right-end"
              >
                <InfoOutlinedIcon fontSize="small" />
              </Tooltip>
            </div>
          </div>
          <TextField
            {...(hint.current && { defaultValue: hint.current })}
            placeholder="Give a hint for the player!"
            fullWidth
            autoComplete="off"
            onChange={(e) => (hint.current = e.target.value)}
          />

          <button
            id="themeButton"
            className="self-center w-1/2 mt-10 mb-5"
            onClick={() => {
              handleModuleUpdateClick();
            }}
          >
            Update
          </button>
        </div>
      </section>
    </>
  );
};

export default FormLocation;
