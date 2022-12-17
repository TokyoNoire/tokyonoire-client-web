import { GameModule } from "../../../types/global";
import { v4 as uuidv4 } from "uuid";

export class GameDataSchema {
    _id: string;
    isPublished: string;
    isPrivate: boolean;
    titleOfGame: string;
    description: string;
    uId: string;
    author: string;
    rating: string;
    gameImageURL: string;
    estimatedTimeMinutes: number;
    gameModules: GameModule[];
    startingLocationCoordinates: number[];

    public constructor() {
        this._id = uuidv4();
        this.isPublished = "false"
        this.isPrivate = false;
        this.titleOfGame = "";
        this.description = "";
        this.uId = "";
        this.author = "";
        this.rating = "";
        this.gameImageURL = "";
        this.gameModules = [
            {
                _id: uuidv4(),
                typeOfModule: "start",
                title: "Name your start Module",
                description: "",
                question: "",
                answer: "",
                imageURL: "",
                locationCoordinates: [],
                hint: ""
            },
            {
                _id: uuidv4(),
                typeOfModule: "end",
                title: "Name your end Module",
                description: "",
                question: "",
                answer: "",
                imageURL: "",
                locationCoordinates: [],
                hint: ""
            }
        ];
        this.estimatedTimeMinutes = 0;
        this.startingLocationCoordinates = [];
    }
}
