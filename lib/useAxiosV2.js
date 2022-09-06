import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'http://api.weatherapi.com/v1';

const useAxios = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const controller = new AbortController();

    // create a request function
    async function fetchData(url) {
        setError(null);
        setLoading(true)
        try {// Promise Resolves
            const res = await axios(url, { signal: controller.signal })
            setResponse(res.data)
            // setError(null)
        } catch (error) {// Promise Rejects
            if (error.code === "ERR_CANCELED") return
            setError(error.message)
            // setResponse(null)
        } finally {   // Whatever the result of promise
            setLoading(false)
        }
    }

    // decide the events to trigger the request function
    useEffect(() => {
        // this is necessary bcz we don't want the error from our previous request to persist even when the new request is successful
        // setResponse(null);
        fetchData(url);

        return () => {
            controller.abort()
        }
    }, [url]);

    // custom hook returns value
    return { response, error, loading };
};

export default useAxios;
