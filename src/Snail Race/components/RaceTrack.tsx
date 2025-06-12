import Snail from "./Snail"

// {()}
function RaceTrack () {
    const ids = [0, 1, 2, 3]
    let snails = ids.map((num) => 
        <Snail id ={num} position = {0} />)

    return <>
        {snails}
    </>
}

export default RaceTrack