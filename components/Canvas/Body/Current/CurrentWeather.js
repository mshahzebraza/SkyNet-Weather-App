import React from 'react'
import { PrimaryWeatherCard } from ".././WeatherCards/PrimaryWeatherCard";
import { SecondaryWeatherCard } from ".././WeatherCards/SecondaryWeatherCard";
import { Grid, Divider } from '@mui/material';
import Card from '../../../ui/Card';
import { TemperatureBlock } from './TemperatureBlock'
import { StatisticsBlock } from './StatisticsBlock'
import { LabelValueIcon as ConditionBlock } from '../../reusable/LabelValueIcon';



export const CurrentWeather = ({ current }) => {

    const containerStyles = ({ palette }) => ({
        justifyContent: { xs: 'space-between' },
        // alignItems: { xs: 'center' },
        px: { xs: 3.5 },
        py: { xs: 3.5, md: 4 },
        borderRadius: 2.5,
        background: palette.nute.main, //#F6F6F6
        gap: { xs: 2.75, md: 3 },
    })

    const dividerStyles = {
        display: { md: 'none' },
        height: { xs: 'none'/* , md: '100%' */ },
        width: { xs: '100%'/* , md: '1px' */ },
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
        <Grid item container sx={containerStyles} >

            <TemperatureBlock
                actualTemp={temp_c}
                feelslikeTemp={feelslike_c}
                xs={12}
                md={3.5}

            />
            <Divider sx={dividerStyles} />
            <ConditionBlock
                label={'Current Weather'}
                value={text}
                imagePath={'https:' + icon}
                xs={12}
                md={3.5}
            />
            <Divider sx={dividerStyles} />
            <StatisticsBlock
                wind={wind_kph}
                windDirection={wind_dir}
                humidity={humidity}
                cloud={cloud}
                isDay={is_day}
                xs={12}
                md={3.5}
            />

        </Grid>
    );
}
CurrentWeather.displayName = 'CurrentWeather';
ConditionBlock.displayName = 'ConditionBlock_Big';