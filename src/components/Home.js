import earth from "./img/earth.jpeg"
import rover from "./img/rover.jpeg"
import event from "./img/event.jpeg"



const Home = () => {
    return ( 
        <section>
            
            <div className="banner">

                <div className="bannerCenter">

                    <h1>REACT<span className="blogo">NASA</span></h1>
                    <p>
                        Welcome to the most amazing react site where you will experience somthing interesting for example direct picture of the Day from NASA or Search for taken by mars rover or the events on earth.
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

                        <button className="btn">Click Here</button>

                    </div>

                    <div className="podpic">

                        <img src={earth} alt="..."/>

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

                        <button className="btn">Click Here</button>

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

                        <button className="btn">Click Here</button>

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