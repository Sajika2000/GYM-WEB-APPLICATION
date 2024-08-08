import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <header>
      <p>ELITE EDGE FITNESS</p>
    
      <nav>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>
        </nav>
      
   
      

    </header>
    
    
    </>
    
  )
}

export default Navbar
