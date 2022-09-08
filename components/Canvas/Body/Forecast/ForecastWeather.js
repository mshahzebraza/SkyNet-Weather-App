import React from 'react'
import { Grid, Typography } from '@mui/material';
import Card from '../../../ui/Card';
import { ForecastRow } from './ForecastRow';



export const ForecastWeather = ({ forecastCollection }) => {


    return (
        <Grid item container direction={'column'} justifyContent='space-around'>
            {
                forecastCollection.forecastday.map(({
                    date_epoch: dateEpoch,
                    day: {
                        avgtemp_c: avgTemp,
                        daily_chance_of_rain: chancesOfRain,
                        condition: { text, icon }
                    },
                    astro: { sunrise, sunset }
                }, idx) => {
                    return <ForecastRow key={idx} forecast={{ dateEpoch, avgTemp, chancesOfRain, text, icon, sunrise, sunset }} />
                })
            }
        </Grid>

    );
}
ForecastWeather.displayName = 'ForecastWeather';


