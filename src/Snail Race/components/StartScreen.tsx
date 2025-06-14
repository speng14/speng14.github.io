import "./StartScreen.css";

interface StartScreenProps {
    setStarted: (value: boolean) => void;
}

function StartScreen(props: StartScreenProps) {
    const handleStart = () => {
        props.setStarted(true);
    }


    return <div className="start sign">
        <h1>Snail Race!</h1>
        <button className="start button" 
                onClick={handleStart}>Start</button>
    </div>
}

export default StartScreen; 