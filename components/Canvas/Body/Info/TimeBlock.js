import { Typography, Grid, Box } from "@mui/material";
import { formatDigits, formatHours12, getFromEpoch } from "../../../../lib/helpers";


export const TimeBlock = ({ epochTime }) => {
    const { hours, hoursSuffix, minutes, seconds } = getFromEpoch(epochTime * 1000)

    return (
        <Grid item xs container alignItems='center' component='p' justifyContent='center'>
            <Typography variant="h6" component='span'>{hours}: &nbsp;</Typography>
            <Typography variant="h6" component='span'>{minutes}: &nbsp;</Typography>
            <Typography variant="h6" component='span'>{seconds}&nbsp;</Typography>
            <Typography variant="h6" component='span'>{hoursSuffix}</Typography>
        </Grid>);
}
TimeBlock.displayName = `TimeBlock`;
