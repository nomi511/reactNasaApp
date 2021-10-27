

const Navbar = () => {
    return ( 
        <div className="nav">

            <header className= "navflex" >

                <div className="logo">
                    <h3>REACT<span className="nlogo">NASA</span>APP</h3>
                </div>

                <div className="links">

                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="./components/Pod">POD</a></li>
                        <li><a href="./components/Rover">ROVER</a></li>
                        <li><a href="./components/Events">EVENTS</a></li>
                        <li><a href="./components/About">ABOUT</a></li>
                    </ul>

                </div>

            </header>

        </div>
     );
}
 
export default Navbar;