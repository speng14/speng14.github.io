
interface HeaderProps {
    title: string;
    bg: string
}

const Header = (props: HeaderProps) => {
    return <div className="flex h-100 bg-cover bg-center"
    style={{backgroundImage: "url(" + props.bg + ")"}}> 
            <div className="absolute bg-slate-950/70 h-20 top-32"> 
                <h1 className="m-2! ml-8!">{props.title}</h1>
            </div>
        </div>
}

export default Header;