import Snail from "./Snail"
import "./RaceTrack.css"
import { useEffect, useState } from "react";

function getRandomNum(max: number) {
  return Math.floor(Math.random() * max);
}
function zip(a:number[], b:number[]) {
    return a.map((k, i) => [k, b[i]]);
}

function RaceTrack () {
    const ids = [0, 1, 2, 3]
    const [positions, setPositions] = useState([0, 0, 0, 0])

    useEffect(() => {
        const interval = setInterval(() => {
        
        setPositions(prev => {
            const i = getRandomNum(4)
            const newPositions = [...prev]
            newPositions[i] += getRandomNum(10)
            return newPositions
        })
    }, 1000/20)

    return () => clearInterval(interval)
    }, [])
    

    return <div className = "racetrack">
        {zip(ids, positions).map(([id, pos]) => 
        <Snail key ={id} id={id} position = {pos} />)}
    </div>
}

export default RaceTrack