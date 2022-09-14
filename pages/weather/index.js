// Dependency imports
// import Head from 'next/head'
import Head from 'next/head';
// Objects & Styles

// Components
import { useEffect, useState } from "react";
import useAxios from "../../lib/useAxios";
import { getURL } from "../../lib/helpers";
import Canvas from "../../components/Canvas/Canvas";
import { mockResponse } from "../../lib/mockResponse";



// https://api.weatherapi.com/v1/forecast.json?key=df0dcf32a9b346308a814745212710&q=asd&days=10&aqi=yes&alerts=no
export default function Weather() {

    const [data, setData] = useState(null);
    const [query, setQuery] = useState('karachi');
    // https://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={QUERY}&days=10&aqi=yes&alerts=no
    const { response, loading, error } = useAxios(getURL(query));

    useEffect(() => {
        if (response && response.data) setData(response.data)
    }, [response]);

    return (
        <Canvas
            query={query}
            setQuery={setQuery}
            data={data}
            loading={loading}
            error={error}
        />
    );
}
Weather.displayName = `Weather`;





