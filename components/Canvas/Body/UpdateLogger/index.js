import { Typography, Grid } from '@mui/material';
import React from 'react'
import { getFromEpoch } from '../../../../lib/helpers';

export const UpdateLogger = ({ lastUpdateEpoch }) => {

    const { date, month, year, hours, minutes, hoursSuffix, } = getFromEpoch(lastUpdateEpoch)

    return (
        <Grid container gap={1} >
            <Typography>Last Updated:&nbsp;</Typography>
            <Typography>{hours}: {minutes}: {hoursSuffix},&nbsp;</Typography>
            <Typography>{date}-{month}-{year}</Typography>
        </Grid>
    )
}
