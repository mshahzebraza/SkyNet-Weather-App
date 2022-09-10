import React from 'react'
import { PrimaryWeatherCard } from ".././WeatherCards/PrimaryWeatherCard";
import { SecondaryWeatherCard } from ".././WeatherCards/SecondaryWeatherCard";
import { Grid, Divider } from '@mui/material';
import Card from '../../../ui/Card';
import { TemperatureBlock } from './TemperatureBlock'
import { StatisticsBlock } from './StatisticsBlock'
import { LabelValueIcon as ConditionBlock } from '../../reusable/LabelValueIcon';





export const CurrentWeather = ({ current }) => {

    const containerStyles = {
        px: 6.25,
        py: 3.75,
        borderRadius: 2.5,
        background: '#F6F6F6',
    }

    const dividerStyles = {
        background: '#10101033',
        height: 'auto',
    }


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
        <Grid item container justifyContent='space-between' gap={6.25} sx={containerStyles} >

            <TemperatureBlock
                actualTemp={temp_c}
                feelslikeTemp={feelslike_c}
            />
            <Divider orientation='vertical' sx={dividerStyles} />
            <ConditionBlock
                label={'Current Weather Condition'}
                value={text}
                imagePath={'https:' + icon}
                xs
            />
            <Divider orientation='vertical' sx={dividerStyles} />
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
ConditionBlock.displayName = 'ConditionBlock_Big';