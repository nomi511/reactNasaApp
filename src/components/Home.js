
import rover from "./img/rover.jpeg"
import event from "./img/event.jpeg"
import podpic from "./img/pod.jpeg"

import { Link } from "react-router-dom"



const Home = () => {


    
    

    return ( 
        <section>
            
            <div className="banner">
                <div className="bannerCenter">
                    <h1>REACT<span className="blogo">NASA</span></h1>
                    <p>
                        Welcome to the most amazing react site where you will experience somthing interesting like picture of the Day direct from NASA or Search for images taken by mars rover or the events happening on earth.
                    </p>
                </div>
            </div>


            <div className="sectionDesc">
                <div className="podDesc">
                    <div className=" podpara ">
                        <h1>
                            POD
                        </h1>
                        <p>
                            POD stands for picture of the day. Nasa api provides us everyday a unique picture and everyone can parse that picture usnig NASA api. so click the button below to see that picture
                        </p>
                        <Link to="/pod"><button className="btn">Click Here</button></Link>
                    </div>

                    <div className="podpic">
                        <img src={podpic} alt="..."/>
                    </div>

                </div>



                <div className="roverDesc">
                    <div className="roverpic">
                        <img src={rover} alt="..."/>
                    </div>

                    <div className="roverpara">
                        <h1>
                            ROVER
                        </h1>
                        <p>
                            Rover is actually the mars rover that roams around on the surface of the mars and hepls Nasa get the data required about the surface of the mars and it sends pictures as well and we can see that picture by clicking the button below
                        </p>
                        <Link to="/rover"><button className="btn">Click Here</button></Link>
                    </div>


                </div>



                <div className="eventsDesc">
                    <div className="eventpara">
                        <h1>
                            EVENTS
                        </h1>
                        <p>
                            In the events section we can see the Nasa data about the events for example wild fires and icebergs etc. click the button below to see all the details
                        </p>
                        <Link to="/events"><button className="btn">Click Here</button></Link>
                    </div>

                    <div className="eventpic">
                        <img src={event} alt="..."/>
                    </div>
                </div>

            </div>
            
            
        </section>
     );
}
 
export default Home;