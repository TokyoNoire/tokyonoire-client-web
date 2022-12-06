

const BearingAngle = () => {


    function toDegrees(number: number) {
        return number * 180 / Math.PI
    }

    function toRadians(number: number) {
        return number * Math.PI / 180
    }

    function calcBearingAngle(currentCoords : number[], targetCoords : number[]) : number | null {
        // Credit to for formula: https://www.movable-type.co.uk/scripts/latlong.html
        let bearingAngle: number | null = null;
        if (currentCoords && currentCoords[0] && currentCoords[1]
            && targetCoords && targetCoords[0] && targetCoords[1]) {
            const lonO = toRadians(currentCoords[0]),
                latO = toRadians(currentCoords[1]),
                lonT = toRadians(targetCoords[0]),
                latT = toRadians(targetCoords[1]);

            const Y = Math.sin(lonT - lonO) * Math.cos(latT)
            const X = Math.cos(latO) * Math.sin(latT) - Math.sin(latO) * Math.cos(latT) * Math.cos(lonT - lonO)
            const Theta = Math.atan2(Y, X)
            bearingAngle = toDegrees(Theta)
        }
        return bearingAngle;
    }

    return { calcBearingAngle };
}

export default BearingAngle;