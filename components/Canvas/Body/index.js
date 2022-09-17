import { Loader } from "../../ui/Loader";
import { InfoBar } from "./Info/InfoBar";
import { CurrentWeather } from "./Current/CurrentWeather";
import { ForecastWeather } from "./Forecast/ForecastWeather";
import Typography from '@mui/material/Typography'
import { SkeletonBody } from "./SkeletonBody";

export const Body = ({ data: weatherData, loading }) => {
    if (loading) return <SkeletonBody />
    // if (!!loading) return <Loader />
    console.log('weatherData', weatherData)
    const { location, current, forecast } = weatherData;

    return (<>
        {/* {<Typography variant="h6" color="error"> Old Data Being Shown </Typography>} */}
        <InfoBar location={location} />
        <CurrentWeather current={current} />
        <ForecastWeather forecastCollection={forecast} />
    </>);
}

Body.displayName = `Canvas-Body`;
