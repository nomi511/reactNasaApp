
import useFetch from './useFetch'

const Pod = () => {

    const { data, pending, error} = useFetch("https://api.nasa.gov/planetary/apod?api_key=DaQJ0gH4K0EVm4Q2Lhm5a9ASMBxhI578YRCMcitO")




    return ( 

        <div className="podpage">
            { error && <div className="error container"> <h3>{error}</h3> </div>}
            { pending && <div className="loading container"> <h3>Loading...</h3> </div> }
            { data &&  
                <div className="container imgflex">

                    <div className="pic">
                        <img src={data.hdurl} alt="loading..." />
                    </div>

                    <div className="details">

                        <h1>{data.title}</h1>
                        <h2>Explanation</h2>
                        <p>{data.explanation}</p>

                    </div>
                    
                </div>
            }
            
        </div>

     );
}
 
export default Pod;