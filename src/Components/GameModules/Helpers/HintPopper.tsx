import React, { type FC, type ReactElement } from "react";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fab from '@mui/material/Fab';

interface prop {
  hint: string;
}

const HintPopper = (prop:prop): ReactElement => {
  const { hint } = prop;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'hint' : undefined;
  return (
    <div className="sticky bottom-0 h-16 ml-2 ">
      <Fab size="medium" aria-describedby={id} id="themeButton" className="font-heading" type="button" onClick={handleClick} aria-label="hint">
<p className="font-heading">?</p>
</Fab>
    
      <Popper id={id} open={open} anchorEl={anchorEl} className="p-3 rounded-lg bg-darkGrey">
        <Box>
          {hint}
        </Box>
      </Popper>
    </div>

  );
};

export default HintPopper;