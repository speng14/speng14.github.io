import psetMeme from "../../assets/pset-meme.png"

function Math () {
    return <>
        <h1>Math</h1>
        <p className="my-4 p-2 border rounded-lg border-amber-300">⚠️ This website is a work in progress!
                Pardon the dust as I continue to add/improve the website!  
            </p>

        <div className="flex justify-center">

        <div className="w-md px-4">
                <img src={psetMeme} alt="Hour 9 of psetting: you begin asking 
                the math gods for a revelation" className="w-full h-auto mb-1"/>
                <p className="text-gray-500 text-center text-xs mx-2">I taught a minicourse on 
                    Bezout's Theorem at PROMYS 2023 and a friend of mine made a meme of a pose I 
                    made (I get really into my explanations).</p>
        </div>

        <div className="w-3xl px-4 mt-4">
            <p>
                I love teaching math! I think mathematical exposition is super fun, regardless of 
                if it's about systems of equations or sheafs of functions (though this is something 
                I don't understand yet). 
                <br />

                One of the most disheartening things to hear is when students proclaim that they 
                can't do math. Math, like all things, is a skill that you develop. You're not born
                with the innate ability to manipulate man-made symbols on a page, so don't be 
                disheartened! Believe me, I've had my fair share of self-doubts in this field, but 
                pushing past that has brought me where I am, so do the same! Push past those doubts!!!
                <br />

                As you can see, this page is still a work-in-progress, but I plan to add some of the 
                math stuff that I've written here! This will include my old minicourse notes for PROMYS
                and hopefully other exposition projects that I have in the works. 
            </p>
        </div>
        </div> 
        
    </>
}

export default Math;