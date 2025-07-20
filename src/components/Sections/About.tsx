


function About () {

    const frontendSkills = ["React", "TypeScript", "TailwindCSS"]
    const backendSkills = ["Node.js", "Python", "Socket.IO", "MongoDB"]
    // Would like to do math skills and miscellaneous, but I don't have enough in miscellaneous to justify this 
    const mathSkills = ["SageMath", "Wolfram Mathematica", "Google Apps Script"]
    const experiences = [["May 2025 - Present", "Researcher @ USF REU for Cryptography and Coding Theory", "Tampa, FL", 
        "Studied polynomials and rational functions over finite fields under pre- and post-composition by elements of PGL."
            ],
        ["January 2025 - May 2025", "Researcher @ Cybersecurity at MIT Sloan Consortium (CAMS)", "Cambridge, MA", 
            "Developed and administered a cybersecurity culture survey, which culminated a report presented to the municipality tested."
            ],
        ["January 2025", "MIT Directed Reading Program", "Cambridge, MA", 
            "Read An Invitation to Arithmetic Geometry by D. Lorenzini. I think it's a great and accessible exposition."
        ],

        ["January 2025", "Web Lab Contestant", "Cambridge, MA", "Developed BattleLingo with a group of two friends. Won 5th place. I mostly worked on the game logic (but we all did a bit of everything). I'm really grateful for this opportunity; it's what got me into web dev!"]
    ]

    return <section id="about" className="flex flex-col justify-center items-center py-15">
        <div className="max-w-3xl mx-auto px-4">
            <h2>About Me</h2>
        </div>
        
        <div className="w-3xl px-4">
            <p className="text-gray-300 mb-6 text-lg px-4 mx-auto">
                Hello! I'm Siyu Peng, and I go by Angeline. I'm a junior at the Massachusetts Institute of Technology, majoring in Course 18 and minoring 
                in Course 6. I'd like to do math research, and my research interests primarily include arithmetic and algebraic geometry. 
                I have secondary interests in cryptography, web development, and cybersecurity. <br />
            </p>

            {/* TO DO: I want to be able to hover over the skills and display a short blurb about the projects where I've used them */}
            
            <div className="mt-8">
            <h3>Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
                <div className="rounded-xl bg-slate-800 p-6 hover:-translate-y-1 transition-all border border-white/15 hover:border-teal-500" >
                    <h3 className="text-2xl font-bold mb-4 w-full text-center">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((skill: string, key: number) => (
                            <span key={key} className = "bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl bg-slate-800 p-6 hover:-translate-y-1 transition-all border border-white/15 hover:border-teal-500">
                    <h3 className="text-2xl font-bold mb-4 w-full text-center">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((skill: string, key: number) => (
                            <span key={key} className = "bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl bg-slate-800 p-6 hover:-translate-y-1 transition-all border border-white/15 hover:border-teal-500">
                    <h3 className="text-2xl font-bold mb-4 w-full text-center">Miscellaneous</h3>
                    <div className="flex flex-wrap gap-2">
                        {mathSkills.map((skill: string, key: number) => (
                            <span key={key} className = "bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
                </div>
            </div>

            {/* TO DO: I want to add more experiences here, and make this a scrollable box*/}
            {/* TO DO: I need to add the location to these lmao */}
            <div className="mt-8">
                <h3>Recent Experiences</h3>
                <ol className="border-s border-gray-200 dark:border-gray-700">
                    {experiences.map((experience: string[]) => (
                        <li className="mb-10 ms-4">
                            <div className="-translate-x-[1.38em] translate-y-4.5 w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience[0]}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience[1]}</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience[3]}</p>
                        </li>
                    ))
                    }
                </ol>
            </div>
            
            <div>
                <h3>Fun Facts!</h3>
                <ul className="list-disc list-inside text-gray-400">
                    <li>I keep a <a href="https://listed.to/@angelofd3sth">blog
                </a></li>
                    <li>I play clarinet pretty seriously. I've been playing for MITWE while at MIT (shoutout to the incredible Fred Harris),
                        and before that, I used to play for the Lyceum Philhamornic in high school</li>
                    <li>I'm an ex- (tryhard) Honkai Impact 3rd player and a current semi-tryhard Honkai Star Rail player</li>
                    <li>Most of the music I listen to is Vocaloid</li>
                </ul>
                {/* TO DO: add some sort of spotify integration here */}
            </div>
        </div>
        
    </section>
        
}

export default About;