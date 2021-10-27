

const Navbar = () => {
    return ( 
        <div className="nav">

            <header className= "navflex" >

                <div className="logo">
                    <h3>REACT NASA APP</h3>
                </div>

                <div>

                    <ul>
                        <li><a href="#">Home</a></li>
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