import React from 'react'
import { PrimaryWeatherCard } from "./PrimaryWeatherCard";
import { SecondaryWeatherCard } from "./SecondaryWeatherCard.js";
import { Grid, Typography } from '@mui/material';

export const WeatherRow = ({ location }) => {
    return (
        <Grid item container justifyContent='space-around'>
            <PrimaryWeatherCard />
            <SecondaryWeatherCard />
            <SecondaryWeatherCard />
        </Grid>);
}
WeatherRow.displayName = 'WeatherRow';