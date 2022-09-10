import { Air, Cloud, Opacity } from "@mui/icons-material";
import { Typography, Grid, Box, IconButton, Divider } from "@mui/material";
import { formatDigits, formatHours12 } from "../../../../lib/helpers";
import { NextImage } from "../../../ui/stateBlocks/NextImage";


function StatisticsRow({ icon: StatIcon, label, value, suffix }) {

    return (
        <Grid item container alignItems='center' justifyContent='space-between' /* py={1} */ >
            <Grid item xs='auto' container alignItems='center' >
                <IconButton><StatIcon /></IconButton>
                <Typography variant="subtitle2">{label}</Typography>
            </Grid>
            <Grid item xs='auto' container alignItems='center' gap={0.25} >
                <Typography variant="h5" >{value}</Typography>
                <Typography variant="caption">{suffix}</Typography>
            </Grid>
        </Grid>
    );
}


export const StatisticsBlock = ({ wind, windDirection, humidity, cloud, isDay }) => {
    const dividerStyles = {
        background: '#10101033',
        width: '100%',
    }
    return (
        <Grid item xs container alignItems='center' justifyContent='center' gap={2} >

            <StatisticsRow icon={Air} label={'Wind'} value={wind} suffix={'kph'} />
            <Divider sx={dividerStyles} />
            <StatisticsRow icon={Opacity} label={'Humidity'} value={humidity} suffix={'%'} />
            <Divider sx={dividerStyles} />
            <StatisticsRow icon={Cloud} label={'Cloud'} value={cloud} suffix={'%'} />
        </Grid>);
}
StatisticsBlock.displayName = `StatisticsBlock`;
