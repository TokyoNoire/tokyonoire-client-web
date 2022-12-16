import React, { type ReactElement } from "react";
import { useRouter } from "next/router";
import { type saveGameInfo } from "../../types/global";
import { Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GameListAuthored from "../../Components/Editor/GameListAuthored"

interface Props {
    game: saveGameInfo;
    handleClose: () => void;
    gameId: string;
}

const Editor = (props: Props): ReactElement => {
    // const { game, gameId } = props;
    const router = useRouter();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Kazuki: this function below is connected to the open New Case button. I assume the request happens here.
    const handleCreateNewGameClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push({
            pathname: "/editor/[gameId]",
            query: { gameId: "gameId" },
        });
    };

    return (
        <>
            <div className="mt-40 overflow-x-auto flexCenterDiv">
            <p className="self-center p-5 text-xl text-center uppercase font-heading">
        Welcome USERNAME
      </p>
      <p className="mb-10 text-center font-body1">
        &quot;Is there a mystery afoot that you&apos;re itching for others to
        solve?&quot;
      </p>
            <div className="flex w-full p-5 justify-right font-heading ">
                <button id="themeButton" onClick={handleCreateNewGameClick}>Open New Case</button>
            </div>
        <GameListAuthored/>
            </div >

        </>
    )
};

export default Editor;
