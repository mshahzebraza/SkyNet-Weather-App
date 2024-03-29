import { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';


axios.defaults.baseURL = 'http://api.weatherapi.com/v1';

const useAxios = (url, debounceDelay = 300) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const controller = new AbortController(); // this is defined inside useEffect as AbortController is available only on the client side and useEffect also runs on the client side

        // create a request function
        const handleFetching = debounce(async () => {
            setLoading(true)

            try {
                const res = await axios(url, { signal: controller.signal });
                setResponse(res)
                setError(null)
            } catch (error) {// Promise Rejects
                if (error.code === "ERR_CANCELED") {
                    // console.count('Cancelled Request by Abort Controller')
                    return
                }
                setError(error)
            } finally {   // Whatever the result of promise
                setLoading(false)
            }

        }, debounceDelay)

        handleFetching()
        // Cleanup
        return () => {
            controller.abort()
        }
    }, [url]);

    // custom hook returns value
    return { response, error, loading };
};

export default useAxios;
