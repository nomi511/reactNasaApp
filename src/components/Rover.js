
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Rover = () => {

    const random = Math.floor( (Math.random() * 500) + 1)

    const {data, pending, error} = useFetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DaQJ0gH4K0EVm4Q2Lhm5a9ASMBxhI578YRCMcitO")

    
    

    
    

    return ( 

        <div className="roverPage">

            <h2>ROVER</h2>

            { error && <div className="error container"> <h3>{error}</h3> </div>}
            { pending && <div className="loading container"> <h3>Loading...</h3> </div> }
            {data && 
                <div className="pic">

                    <div className="imagediv">
                        <img src={data.photos[random].img_src} alt="loading..." id="imgpic" />
                    </div>

                    <Link to="/rover" className="reloadlink"><button className="btnreload">Reaload</button></Link>

                </div>
            }
        </div>

     );
}
 
export default Rover;