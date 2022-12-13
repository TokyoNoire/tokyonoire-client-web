import React, { type FC, type ReactElement } from "react";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

const HintPopper: FC = (): ReactElement => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'hint' : undefined;
  return (
    <div>
      <button aria-describedby={id} id="themeButton" className="font-heading" type="button" onClick={handleClick}>
        I need a Hint!
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} className="p-3 rounded-lg bg-darkGrey">
        <Box>
          The content of the Popper.
        </Box>
      </Popper>
    </div>

  );
};

export default HintPopper;