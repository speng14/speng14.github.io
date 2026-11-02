// import psetMeme from "../../assets/pset-meme.png"

function Math () {
    return <div className="w-full mx-2 md:w-3xl xl:w-4xl md:m-auto flex flex-col mt-4 md:px-0">
        <h1>Math</h1>
        <p className="mt-4 p-2 mx-16 border rounded-lg border-amber-300">⚠️ This website is a work in progress!
                Pardon the dust as I continue to add/improve the website!  
            </p>

        <div className="flex justify-center mt-4">

        <h3>Expositions</h3>
        <ul>
            <li><a href="../../assets/The_Albanese_Method.pdf">The Albanese Method</a>, for an independent reading course on algebraic geometry</li>
            <li><a href="../../assets/Reduction in Arithmetic Dynamics.pdf">Reduction in Arithmetic Dynamics</a>, for 18.784: Seminar in Arithmetic Dynamics</li>
            <li><a href="../../assets/Intro to Real Analysis.pdf">Intro to Real Analysis</a>, for the 2026 iteration of the UMA IAP Proofs Workshop</li>
        </ul>

        {/* <div className="px-4">
            <div className="sm:w-sm px-4 float-left">
                <img src={psetMeme} alt="Hour 9 of psetting: you begin asking 
                the math gods for a revelation" className="w-full h-auto mb-1"/>
                <p className="text-gray-500 text-center text-xs mx-2">I taught a minicourse on 
                    Bezout's Theorem at PROMYS 2023 and a friend of mine made a meme of a pose I 
                    made (I get really into my explanations).</p>
            </div>
        </div> */}
        </div> 
    </div>
}

export default Math;