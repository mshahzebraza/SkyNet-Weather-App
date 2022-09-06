// Dependency imports
// import Head from 'next/head'
import styles from "../../styles/Weather.module.scss";
import Head from 'next/head';
// Objects & Styles

// Components
import { useEffect, useState } from "react";
import useAxios from "../../lib/useAxios";
import { Button, Box, Grid, IconButton, Typography } from '@mui/material'
import { Pin } from "@mui/icons-material";
import { getURL } from "../../lib/helpers";
import Canvas from "../../components/Canvas/Canvas";
import { Header } from "../../components/Canvas/Header";
import { Body } from "../../components/Canvas/Body";
import { Footer } from "../../components/Canvas/Footer";


import { ErrorBlock, Loader, ResponseBlock } from "../../components/ui/stateBlocks"

// https://api.weatherapi.com/v1/forecast.json?key=df0dcf32a9b346308a814745212710&q=asd&days=10&aqi=yes&alerts=no
export default function Weather() {

    const [data, setData] = useState(null);
    const [query, setQuery] = useState('karachi');
    // https://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={QUERY}&days=10&aqi=yes&alerts=no
    const { response, loading, error } = useAxios(getURL(query));


    useEffect(() => {
        if (response && response.data) setData(response.data)
    }, [response]);


    if (!!loading) return 'xxxxxxxxxxx'

    const { location = {}, current = {}, forecast = {} } = data;

    return (
        <Canvas>
            {/* Search Bar */}
            <Header query={query} setQuery={setQuery}></Header>
            <Body />
            <Footer />
            <Grid item className={styles[`sec${6}`]}>
                {!!loading ? (
                    <p>isLoading...</p>
                ) : (
                    <div>
                        {error && <ErrorBlock error={error} />}
                        {data && <ResponseBlock data={data} />}
                        {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
                    </div>
                )}

            </Grid>
        </Canvas>
    );
}
Weather.displayName = `Weather`;





