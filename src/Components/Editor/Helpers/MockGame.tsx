const game = {
    titleOfGame: "Looking for the Salad",
    isPublished: false,
    description: "Rocket salad has disappeared yesterday evening at 11:43 according to the Mache Police Department report. Get to work detective!",
    rating: 5,
    author: "BigKaz",
    image: null,
    estimatedTimeMinutes: 30,
    startLocationCoordinates: [0, 0],
    gameModules:
        [
            {
                // positionId: 1,
                _id: 231,
                typeOfModule: "location",
                title: "Dressing Spotted",
                description: "The last time Rocket was seen was sitting on an unusual bench near the Mori Tower, in Roppongi.",
                question: "",
                answer: [""],
                hint: "",
                image: "",
                locationCoordinates: [35.659439, 139.728384]
            },
            {
                // positionId: 2,
                _id: 312,
                typeOfModule: "location",
                title: "Under the dressing",
                description: "You find traces of sesame dressing.",
                question: "",
                answer: [""],
                image: "",
                hint: "",
                locationCoordinates: [35.659439, 139.728384]
            },
            {
                // positionId: 3,
                _id: 330,
                typeOfModule: "narrative",
                title: "Deadly colander",
                description: "Dramatic statement.",
                question: "",
                answer: [""],
                image: "",
                hint: "",
                locationCoordinates: [35.659439, 139.728384]
            },
            // {
            //     positionId: 4,
            //     _id: 370,
            //     typeOfModule: "narrative",
            //     title: "Oopsies",
            //     description: "Dramatic statement.",
            //     question: "",
            //     answer: [""],
            //     image: "",
            //     hint: "",
            //     locationCoordinates: [35.659439, 139.728384]
            // },
            // {
            //     positionId: 5,
            //     _id: 316,
            //     typeOfModule: "narrative",
            //     title: "Another One",
            //     description: "Dramatic statement.",
            //     question: "",
            //     answer: [""],
            //     image: "",
            //     hint: "",
            //     locationCoordinates: [35.659439, 139.728384]
            // },
        ],
}

export default game;