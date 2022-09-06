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
import Grid from '@mui/material/Grid'
import useAxios from "../../lib/useAxios";


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
export default function Weather(props) {


    const [data, setData] = useState(null);
    const [query, setQuery] = useState('karachi');
    // https://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={QUERY}&days=10&aqi=yes&alerts=no
    const { response, loading, error } = useAxios(getURL(query));

    console.log({ query, error: !!error, response: !!response })


    // const { state } = useStore()
    // console.log('state');
    // console.log(state);

    // const segregatedProps = state.isValid ? segregateProps(state) : {};
    // For a failed request
    // segregatedProps = 'notAvailable'
    // segregatedProps.weekly = undefined


    return (
        <>

            <Grid
                container
                gap={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                // wrap="nowrap"
                className={`${styles.dashboard}`}
            /* className={`${styles.page} pageContainer`} */
            >
                {
                    [
                        ["panel", <Panel />],
                        ["welcome", <Welcome />],
                        ["highlights", <Highlights />],
                        ["search", <Search query={query} setQuery={setQuery} response={response} loading={loading} error={error} />],
                        ["weekly", <WeekForecast />],
                        ["airQuality", <AirQuality />],
                        ["rainfall", <Rainfall />],
                        ["sunDuration", <SolarTime />]
                    ].map(
                        (item, idx) => <Grid
                            item
                            key={idx}
                            // xs={2}
                            sx={{ border: '1px dashed red', width: '100%', height: '100%', minHeight: 100 }}
                            className={styles[`sec${idx + 1}`]}
                            container
                            justifyContent='center'
                            alignItems='center'
                        >
                            {
                                item[1] ? item[1] : `Section #${idx + 1}: \xa0 ${item[0].toLocaleUpperCase()}`
                            }
                        </Grid>
                    )
                }

                {
                    response && !loading && <div>
                        <p>{response.location.name}, <span>{response.location.region}</span> </p>
                        <p>{response.location.localtime} </p>
                        <p>{response.current.condition.text} </p>
                    </div>
                }
                {
                    loading && <p> loading ...</p>
                }
                {
                    // error && response && <p>showing prev response</p>
                }
                {
                    error && !response && <p>Error: {error}</p>
                }

            </Grid>
        </>
    );
}
Weather.displayName = `Weather`;