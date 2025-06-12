import "./Snail.css"

interface SnailProps {
    id: number;
    position: number;
}

function Snail (props: SnailProps) {
    const idToName = ["Bartholomew", "Bob", "Hubert", "Leaf"]
    const idToFile = [
        "src/assets/bartholomew.png",
        "src/assets/bob.png",
        "src/assets/hubert.png",
        "src/assets/leaf.png"
    ]

    return <img className="snail"
        src = {idToFile[props.id]}
        alt = {idToName[props.id]}
    />
}

export default Snail;