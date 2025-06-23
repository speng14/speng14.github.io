import "../SnailRace.css"

interface SnailProps {
    id: number;
    position: number;
    name: string;
}

function Snail (props: SnailProps) {
    const idToFile = [
        "/public/assets/bartholomew.png",
        "/public/assets/bob.png",
        "/public/assets/hubert.png",
        "/public/assets/leaf.png"
    ]

    return <div className="snail" style = {{top: `${props.id*9.3+8}vw`,
                left: `${props.position/11.5+8}%`}}>
        <p className = "nametag">
            {props.name}
        </p>
        <img
        src = {idToFile[props.id]}
        alt = {props.name}
        style = {{width:`90%`}}
    />
    </div>
    
}

export default Snail;