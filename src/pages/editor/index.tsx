import React, { useEffect, type ReactElement, useState, useContext, } from "react";
import { useRouter } from "next/router";
import { type saveGameInfo } from "../../types/global";
import axios from 'axios'
import { GameDataSchema } from "../../Components/Editor/Helpers/GameDataSchema"
import AppContext from "../../AppContext";
import App from "next/app";
import GameListAuthored from "../../Components/Editor/GameListAuthored"
import FadeDiv from "../../Components/Helpers/FadeDiv";

interface Props {
    game: saveGameInfo;
    handleClose: () => void;
    gameId: string;
}

const Editor = (props: Props): ReactElement => {
    const value = useContext(AppContext);
    const { setGameData, setGameModules, setGameInfoModule, userId, username } = value
    const router = useRouter();
    const [show, setShow] = useState<boolean>(true);


    useEffect(() => {
        if (!userId) {
            alert("You must be signed in to use the editor")
            router.push('/')
        }
    }, [userId])

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
                `https://tokyo-noire-server-development.herokuapp.com/editor/${userId}`
            )
            .then((response) => {
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
        console.log('triggered')
        e.preventDefault();
        const templateGameData = new GameDataSchema();
        templateGameData.titleOfGame = `game#${templateGameData._id}`;
        templateGameData.uId = userId;
        templateGameData.author = username;
        console.log(templateGameData)
         await axios.post("https://tokyo-noire-server-development.herokuapp.com/editor", templateGameData)
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
        });
    };
    console.log(listOfGamesByAuthor)

    return (
        userId && (
            <FadeDiv show={show}>

                <main className="mt-28 min-h-[calc(100vh-28rem)]  flexCenterDiv">
                    <section>
                        <p className="self-center p-5 text-xl text-center uppercase font-heading">
                            Welcome {username}
                        </p>
                        <p className="mb-10 text-center font-body1">
                            {`"Is there a mystery afoot that you're itching for others to
                    solve?"`}
                        </p>
                    </section>
                    <section className="flex flex-col w-full p-5 font-heading ">
                        <button className="w-fit mb-4" id="themeButton" onClick={handleCreateNewGameClick}>Open New Case</button>
                        {listOfGamesByAuthor && <GameListAuthored listOfGamesByAuthor={listOfGamesByAuthor} />}

                    </section>
                </main >
            </FadeDiv>

        )
    )
};

export default Editor;
