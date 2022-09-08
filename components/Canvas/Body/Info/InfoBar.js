import React from 'react'
import { DateBlock } from "./DateBlock";
import { LocationBlock } from "./LocationBlock";
import { TimeBlock } from "./TimeBlock";
import { Grid, Typography } from '@mui/material';

export const InfoBar = ({ location }) => {
    return (
        <Grid item container justifyContent='space-between'>
            {/*  <Grid item xs={12}>
                <Typography variant="h6" >InfoBar</Typography>
            </Grid> */}
            <LocationBlock location={location} />
            <TimeBlock epochTime={location?.localtime_epoch} />
            <DateBlock epochTime={location?.localtime_epoch} />
        </Grid>);
}
InfoBar.displayName = 'InfoBar';