import React from 'react'
import { Paper, Typography, Grid, Box } from '@mui/material';
import { WeatherTempBox } from './WeatherTempBox'

export const SecondaryWeatherCard = () => {
    return (
        <Paper>
            <Grid container direction='column' alignItems='center' gap={4}>
                <Grid item>
                    <Typography variant="body1" >Thursday</Typography>
                </Grid>
                <WeatherTempBox />
                <Grid item container justifyContent='center' gap={4} >
                    <Typography variant="body1" >Date: 27th Feb 2022</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}
SecondaryWeatherCard.displayName = 'SecondaryWeatherCard';