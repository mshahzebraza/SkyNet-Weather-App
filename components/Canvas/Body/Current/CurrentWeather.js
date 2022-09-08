import React from 'react'
import { PrimaryWeatherCard } from ".././WeatherCards/PrimaryWeatherCard";
import { SecondaryWeatherCard } from ".././WeatherCards/SecondaryWeatherCard";
import { Grid, Typography } from '@mui/material';
import Card from '../../../ui/Card';
import { TemperatureBlock } from './TemperatureBlock'
import { ConditionBlock } from './ConditionBlock'
import { StatisticsBlock } from './StatisticsBlock'

export const CurrentWeather = ({ current }) => {
    const {
        temp_c,
        feelslike_c,
        wind_kph,
        wind_dir,
        humidity,
        cloud,
        is_day,
        condition: {
            text,
            icon
        }
    } = current;

    return (
        <Grid item container justifyContent='center'>

            <TemperatureBlock
                actualTemp={temp_c}
                feelslikeTemp={feelslike_c}
            />
            <ConditionBlock
                label={'Current Weather Condition'}
                text={text}
                icon={icon}
            />
            <StatisticsBlock
                wind={wind_kph}
                windDirection={wind_dir}
                humidity={humidity}
                cloud={cloud}
                isDay={is_day}
            />

        </Grid>
    );
}
CurrentWeather.displayName = 'CurrentWeather';