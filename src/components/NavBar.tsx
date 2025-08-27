import { Link } from 'react-router-dom'

// TO DO: add styling for mobile 

const NavBar = () => {

    return <nav className="fixed top-0 w-full z-40 bg-slate-900">
    <div className="max-w-5l mx-auto border border-white/15 ">
        <div className="flex justify-center items-center h-16">
            <Link to="/" className="text-lg text-blue-300 hover:bg-slate-800 transition-colors px-4 h-full flex items-center">Home</Link>
            {/* TO DO: add link to about. Need to use a link to home and then scroll*/}

            {/* dropdown menu */}
            <div className="relative group h-full">
                <Link to="/projects" className="text-lg text-blue-300 hover:bg-slate-800 transition-colors px-4 h-full flex items-center">Projects</Link>

                {/* dropdown content */}
                <div className="absolute left-0 w-36 bg-slate-900 border border-white/15 shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out z-50">
                    <a href="https://speng14.github.io/snailrace/" className="text-base text-blue-300 px-4 py-2 block hover:bg-slate-700 transition-colors">
                    Snail Race!</a>
                </div>
            </div>

            <Link to="/teaching" className="text-lg text-blue-300 hover:bg-slate-800 transition-colors px-4 h-full flex items-center">Math</Link>
            
        </div>
    </div>
        
</nav>
    
    
}

export default NavBar;