import { Loader } from "../../ui/stateBlocks/Loader";
import { ResponseBlock } from "../../ui/stateBlocks/ResponseBlock";
import { ErrorBlock } from "../../ui/stateBlocks/ErrorBlock";
import { InfoBar } from "./Info/InfoBar";
import { CurrentWeather } from "./Current/CurrentWeather";
import { ForecastWeather } from "./Forecast/ForecastWeather";
import Typography from '@mui/material/Typography'

export const Body = ({ data: weatherData, loading, error }) => {
    console.log('weatherData', weatherData)
    if (!weatherData) return 'No Response (Footer) - Add a Structure ...'
    if (!!loading) return <Loader />

    const { location, current, forecast } = weatherData;

    return (<>
        {error && <Typography variant="h6" color="error"> Old Data Being Shown </Typography>}
        <InfoBar location={location} />
        <CurrentWeather current={current} />
        <ForecastWeather forecastCollection={forecast} />
    </>);
}

Body.displayName = `Canvas-Body`;
