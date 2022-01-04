import { useState, useEffect } from "react"; 

const useFetch = (url) => { //custom hook for fetching data. custom hooks must start with use
    
    const abortCont = new AbortController(); //abortcontroller is used to associate with a fetch and stop it 

    const [data, setData] = useState(null); //useState hook is used for creating reactive values. ie. data that is being changed
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => { //useEffect used to fire a function every render
        fetch(url, {signal: abortCont.signal}) //fetch request for data
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === "AbortError"){
                    console.log('fetch aborted')
                } else {
                setIsPending(false);
                setError(err.message);
                }
            }) //catches any network error 
    
            return () => abortCont.abort();

        }, [url]); //useEffect dependencies used to render a function when a specific dependency changes

    return {
        data,
        isPending,
        error
    }
}

export default useFetch;