import Snail from "./Snail"
import "./RaceTrack.css"

// {()}
function RaceTrack () {
    const ids = [0, 1, 2, 3]
    let snails = ids.map((num) => 
        <Snail key ={num} id={num} position = {0} />)

    return <div className = "racetrack">
        {snails}
    </div>
}

export default RaceTrack