import { GameModule } from "../../../types/global"

export class GameModuleSchema {
    typeOfModule: string
    title: string
    description: string
    question: string
    answer: string[]
    image: string
    locationCoordinates: number | null[]
    hint: string[]

    public constructor() {
        this.typeOfModule = "";
        this.title = "";
        this.description = "";
        this.question = "";
        this.answer = [""];
        this.image = "";
        this.locationCoordinates = [null, null];
        this.hint = [""];
    }
}