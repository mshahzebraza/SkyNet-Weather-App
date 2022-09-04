// Dependency imports
// import Head from 'next/head'
import styles from "../../styles/Weather.module.scss";
import Head from 'next/head';
// Objects & Styles

// Components
import Panel from '../../components/AppSections/Panel/Panel';
import Welcome from '../../components/AppSections/Welcome/Welcome';
import Highlights from '../../components/AppSections/Highlights/Highlights';
import Search from '../../components/AppSections/Search/Search';
import WeekForecast from '../../components/AppSections/WeekForecast/WeekForecast';
import AirQuality from '../../components/AppSections/AirQuality/AirQuality';
import Rainfall from '../../components/AppSections/Rainfall/Rainfall';
import SolarTime from '../../components/AppSections/SolarTime/SolarTime';
import useStore from "../../store/StoreContext";
import { useEffect } from "react";
import { segregateProps } from "../../lib/helpers";
import Grid from '@mui/material/Grid'

// Function
export default function Weather(props) {
    console.log(`-----------Rendering WEATHER---PAGE`);
    const { state } = useStore()
    console.log('state');
    console.log(state);

    const segregatedProps = state.isValid ? segregateProps(state) : {};
    // For a failed request
    // segregatedProps = 'notAvailable'
    // segregatedProps.weekly = undefined

    [
        "panel",
        "welcome",
        "highlights",
        "search",
        "weekly",
        "airQuality",
        "rainfall",
        "sunDuration"
    ]


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
                        "panel",
                        "welcome",
                        "highlights",
                        "search",
                        "weekly",
                        "airQuality",
                        "rainfall",
                        "sunDuration"
                    ].map(
                        (item, idx) => <Grid
                            item
                            // xs={2}
                            sx={{ border: '1px dashed red', width: '100%', height: '100%', minHeight: 100 }}
                            className={styles[`sec${idx + 1}`]}
                            container
                            justifyContent='center'
                            alignItems='center'
                        >
                            {`Section #${idx + 1}: \xa0 ${item.toLocaleUpperCase()}`}
                        </Grid>
                    )
                }

            </Grid>
        </>
    );
}
Weather.displayName = `Weather`;