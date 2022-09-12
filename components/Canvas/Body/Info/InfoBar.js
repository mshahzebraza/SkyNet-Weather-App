import React from 'react'
import { DateBlock } from "./DateBlock";
import { LocationBlock } from "./LocationBlock";
import { TimeBlock } from "./TimeBlock";
import { Grid, Typography } from '@mui/material';

export const InfoBar = ({ location }) => {

    const infoBarStyles = (theme) => ({
        // flexDirection: { xs: 'column', md: 'row' },
        // alignItems: { xs: 'center', md: 'row' },
        gap: { xs: 2, md: 2 },
    })

    return (
        <Grid item container justifyContent='space-between' sx={infoBarStyles} >
            {/*  <Grid item xs={12}>
                <Typography variant="h6" >InfoBar</Typography>
            </Grid> */}
            <LocationBlock location={location} />
            <TimeBlock epochTime={location?.localtime_epoch} />
            <DateBlock epochTime={location?.localtime_epoch} />
        </Grid>);
}
InfoBar.displayName = 'InfoBar';