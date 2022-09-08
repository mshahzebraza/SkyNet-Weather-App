import { Air, Cloud, Opacity } from "@mui/icons-material";
import { Typography, Grid, Box, IconButton } from "@mui/material";
import { formatDigits, formatHours12 } from "../../../../lib/helpers";
import { NextImage } from "../../../ui/stateBlocks/NextImage";


function StatisticsRow({ icon: StatIcon, label, value, suffix }) {
    return (<Grid item container alignItems='center' justifyContent='center' >
        <IconButton><StatIcon /></IconButton>
        <Typography variant="body1">{label}</Typography>
        <Typography variant="body1" sx={{ ml: "auto" }} >{value}</Typography>
        <Typography variant="subtitle1">{suffix}</Typography>
    </Grid>);
}


export const StatisticsBlock = ({ wind, windDirection, humidity, cloud, isDay }) => {

    return (
        <Grid item xs container alignItems='center' justifyContent='center'>
            {/* <Typography variant="h6" component='p'>StatisticsBlock: </Typography> */}

            <StatisticsRow icon={Air} label={'Wind'} value={wind} suffix={'kph'} />
            <StatisticsRow icon={Opacity} label={'Humidity'} value={humidity} suffix={'%'} />
            <StatisticsRow icon={Cloud} label={'Cloud'} value={cloud} suffix={'%'} />
        </Grid>);
}
StatisticsBlock.displayName = `StatisticsBlock`;
