import './App.css'
import { Outlet } from "react-router-dom";


import NavBar from './components/NavBar';




function App() {
  return (<>
    <NavBar />
      <div className="mt-16">
        <Outlet /> 
      </div>
  </>
    
  )
  
}

export default App
