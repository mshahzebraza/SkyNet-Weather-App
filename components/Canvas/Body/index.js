import { Grid, Typography } from "@mui/material";
import { Loader } from "../../ui/stateBlocks/Loader";
import { ResponseBlock } from "../../ui/stateBlocks/ResponseBlock";
import { ErrorBlock } from "../../ui/stateBlocks/ErrorBlock";
import { InfoBar } from "./Info/InfoBar";
import { CurrentWeather } from "./Current/CurrentWeather";
import { ForecastWeather } from "./Forecast/ForecastWeather";

export const Body = ({ data: weatherData, loading, error }) => {
    console.log('weatherData', weatherData)
    if (!weatherData) return 'No Response ...'
    if (!!loading) return <Loader />

    const { location, current, forecast } = weatherData;

    return (<>
        <InfoBar location={location} />
        <CurrentWeather current={current} />
        <ForecastWeather forecastCollection={forecast} />
        <Typography >Last Updated: {current.last_updated_epoch}</Typography>
        {/*    <Grid item >
            {!!loading ? (
                <p>isLoading...</p>
            ) : (
                <div>
                    {error && <ErrorBlock error={error} />}
                    {weatherData && <ResponseBlock data={weatherData} />}
                    {weatherData && <pre>{JSON.stringify(weatherData, null, 4)}</pre>}
                </div>
            )}

        </Grid> */}
    </>);
}

Body.displayName = `Canvas-Body`;
