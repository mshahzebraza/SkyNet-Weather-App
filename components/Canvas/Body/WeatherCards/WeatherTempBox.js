import React from 'react'
import { Typography, Grid, Box } from '@mui/material';
import { NextImage } from '../../../ui/stateBlocks/NextImage';



export const WeatherTempBox = () => {
    return (
        <Grid item container gap={2} alignItems='center' >
            <Box>
                <NextImage />
            </Box>
            <Typography variant="body1">22 deg</Typography>
        </Grid>
    );
}

WeatherTempBox.displayName = 'WeatherTempBox';