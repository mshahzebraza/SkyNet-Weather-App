import { Typography, Grid } from "@mui/material";
import { formatDayNum, formatDigits, formatMonthNum } from "../../../lib/helpers";



export const DateBlock = ({ epochTime }) => {
    const curTime = new Date(epochTime * 1000);
    const date = formatDigits(curTime.getDate(), 2);
    const day = formatDayNum(curTime.getDay());
    const month = formatMonthNum(curTime.getMonth());
    const year = curTime.getFullYear();

    return (
        <Grid item xs container alignItems='center' justifyContent='end' >
            <Typography variant="h6" component='span'>{day},&nbsp;</Typography>
            <Typography variant="h6" component='span'>{date} &nbsp;</Typography>
            <Typography variant="h6" component='span'>{month} &nbsp;</Typography>
            <Typography variant="h6" component='span'>{year}</Typography>
        </Grid>);
}
DateBlock.displayName = `DateBlock`;
