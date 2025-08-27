import '../index.css'
import Header from '../components/Header'
import About from '../components/Sections/About'
import home_bg from '../../assets/angeline-beach.jpg'

// TO DO: add light mode 

function Home() {
    return <div id="#home">
        <Header title="Angeline Peng" bg={home_bg}/>
        <div className="w-full md:w-3xl xl:w-4xl m-auto flex flex-col items-center mt-4 px-4 md:px-0">
            
            <div>
                <p>
                Junior at MIT. Math major, CS minor. 
                </p>

            {/* TO DO: want a CV for all my different experiences: tech and academic */}
                <div>
                    {/* <button>(Technical) Resume</button>  */}
                    <button><a href="../../assets/SiyuPengCV-Teaching.pdf">(Teaching) Resume</a></button>
                    {/* <button>(Academic) CV</button> */}
                </div>
                <p>
                    Email: <a href="mailto:pengs14@mit.edu">pengs14@mit.edu</a>
                </p>
                
            </div>

            <p className="m-4 p-2 border rounded-lg border-amber-300">⚠️ This website is a work in progress!
                Pardon the dust as I continue to add/improve the website!  
            </p>
            
            
            <About />
            
        </div> 
        
        

    </div>
}

export default Home;