import React, { useEffect, type ReactElement, useState, useContext, } from "react";
import { useRouter } from "next/router";
import { type saveGameInfo } from "../../types/global";
// import { Button, Menu, MenuItem } from "@mui/material";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { LineAxisOutlined } from "@mui/icons-material";
import axios from 'axios'
// import { v4 as uuidv4 } from "uuid";
import { GameDataSchema } from "../../Components/Editor/Helpers/GameDataSchema"
// import { GameModuleSchema } from "../../Components/Editor/Helpers/GameSchema"
import AppContext from "../../AppContext";
import App from "next/app";
import GameListAuthored from "../../Components/Editor/GameListAuthored"

interface Props {
    game: saveGameInfo;
    handleClose: () => void;
    gameId: string;
}


const Editor = (props: Props): ReactElement => {
    const value = useContext(AppContext);
    const { setGameData, setGameModules, setGameInfoModule, userId, username } = value
    // const { game, gameId } = props;
    const router = useRouter();

<<<<<<< HEAD
    useEffect(() => {
        if (!userId) {
            alert("You must be signed in to use the editor")
            router.push('/')
        }
    }, [userId])
=======
    //       useEffect(() => {
    //     console.log(username)
    //     if (userId) {
    //       console.log(username)
    //     } 
    //   }, [userId])
>>>>>>> 14c870939f119e6fc7e4b6b9ac6b0d80180c9084

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [listOfGamesByAuthor, setListOfGamesByAuthor] = useState<[] | null>(null)


    const getGameByUid = async () => {
      await axios
        .get(
          `http://localhost:2000/editor/${userId}`
        )
        .then((response) =>  {
            console.log(response.data)
            setListOfGamesByAuthor(response.data)
        });
    };

  useEffect(() => {
    console.log(userId)
    getGameByUid();
  }, []) 

    // Kazuki: this function below is connected to the open New Case button. I assume the request happens here.
    const handleCreateNewGameClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        const templateGameData = new GameDataSchema();
        templateGameData.titleOfGame = `game#${templateGameData._id}`;
        templateGameData.uId = userId;
        templateGameData.author = username;
        console.log(templateGameData)
         await axios.post("http://localhost:2000/editor", templateGameData)
             .then(response => {
                 setGameData(response.data);
                 setGameModules(response.data.gameModules);
                 setGameInfoModule(response.data);
             })
          router.push({
              pathname: "/editor/[gameId]",
              query: { gameId: "gameId" },
          });


        templateGameData.uId = userId
        await axios.post("http://localhost:2000/editor", templateGameData)
            .then(response => {
                setGameData(response.data);
                setGameModules(response.data.gameModules);
                setGameInfoModule(response.data);
                const gameId = response.data._id
                return (
                    router.push({
                        pathname: "/editor/[gameId]",
                        query: { gameId: gameId },
                    })
                )
            })
<<<<<<< HEAD
        router.push({
            pathname: "/editor/[gameId]",
            query: { gameId: "gameId" },
        });
=======
>>>>>>> 14c870939f119e6fc7e4b6b9ac6b0d80180c9084
    };

    return (
        <>
            <div className="mt-40 overflow-x-auto flexCenterDiv">
<<<<<<< HEAD
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
                <GameListAuthored />
=======
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
            {listOfGamesByAuthor? <GameListAuthored listOfGamesByAuthor={listOfGamesByAuthor}/> : ""}
>>>>>>> 14c870939f119e6fc7e4b6b9ac6b0d80180c9084
            </div >
        </>
    )
};

export default Editor;
