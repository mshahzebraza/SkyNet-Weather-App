// Dependency imports
// import Head from 'next/head'
import styles from "../../styles/Weather.module.scss";
import Head from 'next/head';
// Objects & Styles

// Components
import Panel from '../../components/AppSections/Panel/Panel';
import Welcome from '../../components/AppSections/Welcome/Welcome';
import Highlights from '../../components/AppSections/Highlights/Highlights';
import Search from '../../components/AppSections/Search';
import WeekForecast from '../../components/AppSections/WeekForecast/WeekForecast';
import AirQuality from '../../components/AppSections/AirQuality/AirQuality';
import Rainfall from '../../components/AppSections/Rainfall/Rainfall';
import SolarTime from '../../components/AppSections/SolarTime/SolarTime';
import useStore from "../../store/StoreContext";
import { useEffect, useState } from "react";
import { segregateProps } from "../../lib/helpers";
import useAxios from "../../lib/useAxios";
import { Button, Box, Grid } from '@mui/material'

// https://api.weatherapi.com/v1/forecast.json?key=df0dcf32a9b346308a814745212710&q=asd&days=10&aqi=yes&alerts=no
const getURL = (
    query,
    key = process.env.API_KEY,
    days = 3,
    aqi = 'no',
    alerts = 'no'
) => (
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${query}&days=${days}&aqi=${aqi}&alerts=${alerts}`
)

// Function

function ResponseBlock({ data }) {
    const { location, current } = data;
    return (<div>
        <p>{location.name}, <span>{location.region}</span> </p>
        <p>{location.localtime} </p>
        <p>{current.condition.text} </p>
    </div>);
}
function ErrorBlock({ error }) {
    const { message, name, code, status } = error;
    return (<div style={{ marginTop: "2rem", color: 'red' }} >
        <p>{code} | <span>{status}</span> </p>
        <p>{message} </p>
        <p>{name} </p>
    </div>);
}


export default function Weather(props) {


    const [data, setData] = useState(null);
    const [query, setQuery] = useState('karachi');
    // https://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={QUERY}&days=10&aqi=yes&alerts=no
    const { response, loading, error } = useAxios(getURL(query));

    console.log({ query, error: !!error, response: !!response, loading })



    useEffect(() => {
        if (response && response.data) setData(response.data)
    }, [response]);




    return (
        <>

            <Grid
                container
                direction='column'
                gap={2}
            >
                {<Grid item>
                    <Search
                        query={query}
                        setQuery={setQuery}
                    />

                </Grid>}

                <Grid item className={styles[`sec${6}`]}>
                    {!!loading ? (
                        <p>isLoading...</p>
                    ) : (
                        <div>
                            {error && <ErrorBlock error={error} />}
                            {data && <ResponseBlock data={data} />}
                        </div>
                    )}

                </Grid>
            </Grid>
        </>
    );
}
Weather.displayName = `Weather`;


