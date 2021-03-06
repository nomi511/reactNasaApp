import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect( () => {

        const abortfetch = new AbortController()

        setTimeout( ()=>{

            fetch(url, {signal: abortfetch.signal})
            .then( response => {
                if(!response.ok)
                {
                    throw Error ("Faild to fetch the data")
                }
                return response.json()
            })
            .then (data => {
                setData(data)
                setPending(false)
                setError(null)

            }).catch( err => {

                setPending(false)
                setError(err)

            })

        }, 1000)

       return () => abortfetch.abort()

    }, [url])

    return { data, pending, error  };
}
 
export default useFetch;