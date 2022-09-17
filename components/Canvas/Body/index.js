import { InfoBar } from "./Info/InfoBar";
import { CurrentWeather } from "./Current/CurrentWeather";
import { ForecastWeather } from "./Forecast/ForecastWeather";
import { SkeletonBody } from "./SkeletonBody";

export const Body = ({ data: weatherData, loading }) => {
    if (loading) return <SkeletonBody />
    const { location, current, forecast } = weatherData;

    return (<>
        <InfoBar location={location} />
        <CurrentWeather current={current} />
        <ForecastWeather forecastCollection={forecast} />
    </>);
}

Body.displayName = `Canvas-Body`;
