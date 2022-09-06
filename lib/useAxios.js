import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'http://api.weatherapi.com/v1';

const useAxios = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const controller = new AbortController();

    // create a request function
    async function fetchDataUsingAxios(url) {
        setLoading(true)
        try {
            const res = await axios(url, { signal: controller.signal })
            setResponse(res)
        } catch (error) {// Promise Rejects
            if (error.code === "ERR_CANCELED") return
            setError(error)
        } finally {   // Whatever the result of promise
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDataUsingAxios(url);
        // Cleanup
        return () => {
            controller.abort()
        }
    }, [url]);

    // custom hook returns value
    return { response, error, loading };
};

export default useAxios;
