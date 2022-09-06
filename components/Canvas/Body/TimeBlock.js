import { Typography, Grid, Box } from "@mui/material";
import { formatDigits, formatHours12 } from "../../../lib/helpers";


export const TimeBlock = ({ epochTime }) => {
    const curTime = new Date(epochTime * 1000);
    const [hours12, suffix] = formatHours12(curTime.getHours(), 2);
    const hours = formatDigits(hours12, 2);
    const minutes = formatDigits(curTime.getMinutes(), 2);
    const seconds = formatDigits(curTime.getSeconds(), 2);

    return (
        <Grid item xs container alignItems='center' component='p' justifyContent='center'>
            <Typography variant="h6" component='span'>{hours}: &nbsp;</Typography>
            <Typography variant="h6" component='span'>{minutes}: &nbsp;</Typography>
            <Typography variant="h6" component='span'>{seconds}&nbsp;</Typography>
            <Typography variant="h6" component='span'>{suffix}</Typography>
        </Grid>);
}
TimeBlock.displayName = `TimeBlock`;
