import { Typography, Grid, Box } from "@mui/material";
import { formatDigits, formatHours12, getFromEpoch } from "../../../../lib/helpers";
import { NextImage } from "../../../ui/stateBlocks/NextImage";
import { ConditionBlock } from "../Current/ConditionBlock";



function ForecastElement({ label, value }) {
    return (
        <Grid item xs container direction={'column'} >
            <Typography variant="subtitle2" component='p'>{label}</Typography>
            <Typography variant="h6" component='p'>{value}</Typography>
        </Grid>
    );
}




export const ForecastRow = ({ forecast }) => {
    const { dateEpoch, avgTemp, chancesOfRain, text, icon, sunrise, sunset } = forecast;

    const { date, month, year } = getFromEpoch(dateEpoch * 1000)

    return (
        <Grid item xs gap={4} container alignItems='center' justifyContent='space-evenly'>
            <ForecastElement label={'Date'} value={`${date} ${month}, ${year}`} />
            <ConditionBlock text={text} icon={icon} />
            <ForecastElement label={'Average Temp'} value={`${avgTemp}\u00B0C`} />
            <ForecastElement label={'Sunrise'} value={sunrise} />
            <ForecastElement label={'Sunset'} value={sunset} />
        </Grid>);
}
ForecastRow.displayName = `ForecastRow`;
