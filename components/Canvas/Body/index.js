import { Grid } from "@mui/material";
import { Loader } from "../../ui/stateBlocks/Loader";
import { ResponseBlock } from "../../ui/stateBlocks/ResponseBlock";
import { ErrorBlock } from "../../ui/stateBlocks/ErrorBlock";
import { InfoBar } from "./InfoBar";
import { WeatherRow } from "./WeatherRow";


export const Body = ({ data: weatherData, loading, error }) => {
    console.log('weatherData', weatherData)
    if (!weatherData) return 'No Response ...'
    if (!!loading) return <Loader />

    const { location, current, forecast } = weatherData;


    return (<>
        <InfoBar location={location} />
        <WeatherRow />

        <Grid item> App Main: Weather </Grid>
        <Grid item> App Footer: Last Updated </Grid>
        <Grid item >
            {!!loading ? (
                <p>isLoading...</p>
            ) : (
                <div>
                    {error && <ErrorBlock error={error} />}
                    {weatherData && <ResponseBlock data={weatherData} />}
                    {weatherData && <pre>{JSON.stringify(weatherData, null, 4)}</pre>}
                </div>
            )}

        </Grid>
    </>);
}

Body.displayName = `Canvas-Body`;
