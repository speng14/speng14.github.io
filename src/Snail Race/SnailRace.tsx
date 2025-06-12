import './SnailRace.css'
import StartScreen from './components/StartScreen';
import RaceTrack from "./components/RaceTrack";
import {useState} from "react";

function SnailRace() {
    let [started, setStarted] = useState(false);
    let screenToShow = (<StartScreen setStarted = {setStarted}/>)
    if (started) {
        screenToShow = (<RaceTrack />) 
    }
    return screenToShow;
}

export default SnailRace;