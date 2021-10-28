import useFetch from "./useFetch";

const Events = () => {

    const {data, pending, error} = useFetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?source=InciWeb,EO")

    let keys = 0

    if(data)
    {
        console.log(data)
    }
    

    return ( 

        <div className="events">
            <h1>Events</h1>

            <div className="eventsflex">
            
            { error && <div className="error container"> <h3>{error}</h3> </div>}
            { pending && <div className="loading container"> <h3>Loading...</h3> </div> }

            

                { data && 
                    data.events.map((ev) => (
                    
                        <div className="ecard" key={keys++}>
                            <h3 className="cardh1"> <b>{ev.title}</b> </h3>
                            <p><b>Type:</b> {ev.categories[0].title}</p>
                            <p><b>Date:</b> {ev.geometries[0].date}</p>
                            <p><b>Coordinates:</b> Long: {ev.geometries[0].coordinates[0]}, Lat: {ev.geometries[0].coordinates[1]}</p>
                            
                            <p>For more info <a href={ev.sources[0].url}>Link</a></p>
                    
                        </div> 
                    
                    ))
                }

            </div>

            

        </div>

     );
}
 
export default Events;





