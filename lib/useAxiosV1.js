import { useEffect, useState } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'http://api.weatherapi.com/v1';

const useAxios = ({ query }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);


    async function fetchData() {
        let cancelRequest;
        setLoading(true)
        const source = axios.CancelToken.source();

        try {


            const res = await axios({
                method: 'GET',
                url: 'http://api.weatherapi.com/v1/forecast.json',
                params: {
                    key: process.env.API_KEY,
                    days: 3, // paid version needed for more than 3 day forecast
                    q: query,
                    aqi: 'yes',
                    alerts: 'no',
                },
                cancelToken: source.token
            })
            // Promise Resolves
            setResponse(res.data)

        } catch (axiosError) {
            // Is the Error caused due to axios request cancellation 
            if (axios.isCancel(axiosError)) return;
            // Promise Rejects
            setError({
                code: axiosError.code,
                name: axiosError.name,
                message: axiosError.message
            })
        }
        // Whatever the result of promise
        setLoading(false)
        // Next time the fetchData is called, previous request must be cancelled
        return () => { source.cancel() }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // custom hook returns value
    return { response, error, loading };
};

export default useAxios;
