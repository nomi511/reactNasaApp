import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="nav">

            <header className= "navflex" >

                <div className="logo">
                    <h3><Link to="/">REACT<span className="nlogo">NASA</span>APP</Link></h3>
                </div>

                <div className="links">

                    <ul>
                        
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/Pod">POD</Link></li>
                        <li><Link to="/Rover">ROVER</Link></li>
                        <li><Link to="/Events">EVENTS</Link></li>
                        
                    </ul>

                </div>

            </header>

        </div>
     );
}
 
export default Navbar;