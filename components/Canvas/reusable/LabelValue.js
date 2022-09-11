import { Grid, Typography } from '@mui/material';
import React from 'react'




export const LabelValue = ({ label, value, ...restProps }) => {
    return (
        <Grid item xs='auto' container direction={'column'} gap={0.65} {...restProps} >
            <Typography variant="overline" component='p'>{label}</Typography>
            <Typography variant="h6" component='p'>{value}</Typography>
        </Grid>
    );
}

LabelValue.displayName = `LabelValue`;
