import React from 'react'
import { Paper, Typography, Grid, Box } from '@mui/material';
import { WeatherTempBox } from './WeatherTempBox'

export const PrimaryWeatherCard = () => {
    return (
        <Paper>
            <Grid container direction='column' alignItems='center' gap={4}>

                <WeatherTempBox />
                <Grid item>
                    <Typography variant="body1" >Condition</Typography>
                    <Typography variant="body1" >
                        temp1 / temp2
                    </Typography>
                </Grid>
                <Grid item container justifyContent='center' gap={4} >
                    <Typography variant="body1" >Attribute & Value pair</Typography>
                </Grid>
            </Grid>
        </Paper>)
}
PrimaryWeatherCard.displayName = 'PrimaryWeatherCard';