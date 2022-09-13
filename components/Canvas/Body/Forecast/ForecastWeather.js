import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import Card from '../../../ui/Card';
import { ForecastRow } from './ForecastRow';


export const ForecastWeather = ({ forecastCollection }) => {


    const containerStyles = ({ palette }) => ({
        px: 3.5,
        py: 3.5,
        backgroundColor: palette.nute.main, // '#F6F6F6'
        borderRadius: 2.5
    })

    return (
        <Grid item container direction={'column'} gap={2} justifyContent='space-around' sx={containerStyles} >
            {
                forecastCollection.forecastday.map(({
                    date_epoch: dateEpoch,
                    day: {
                        avgtemp_c: avgTemp,
                        daily_chance_of_rain: chancesOfRain,
                        condition: { text, icon }
                    },
                    astro: { sunrise, sunset }
                }, idx, arr) => {
                    return <React.Fragment key={idx}>
                        <ForecastRow
                            forecast={{ dateEpoch, avgTemp, chancesOfRain, text, icon, sunrise, sunset }}
                        />
                        {idx + 1 !== arr.length && <Divider />}
                    </React.Fragment>
                })
            }
        </Grid>

    );
}
ForecastWeather.displayName = 'ForecastWeather';


