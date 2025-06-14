import "./Snail.css"

interface SnailProps {
    id: number;
    position: number;
}

function Snail (props: SnailProps) {
    const idToName = ["Bartholomew", "Bob", "Hubert", "Leaf"]
    const idToFile = [
        "/public/assets/bartholomew.png",
        "/public/assets/bob.png",
        "/public/assets/hubert.png",
        "/public/assets/leaf.png"
    ]

    return <img className="snail"
        src = {idToFile[props.id]}
        alt = {idToName[props.id]}
        style = {{top: `${props.id*100}px`,
                left: `${props.position}px`}}
    />
}

export default Snail;