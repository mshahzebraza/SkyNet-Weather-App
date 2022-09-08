import { Typography, Grid } from "@mui/material";
import { formatDayNum, formatDigits, formatMonthNum, getFromEpoch } from "../../../../lib/helpers";



export const DateBlock = ({ epochTime }) => {
    const { date, day, month, year } = getFromEpoch(epochTime * 1000)

    return (
        <Grid item xs container alignItems='center' justifyContent='end' >
            <Typography variant="h6" component='span'>{day},&nbsp;</Typography>
            <Typography variant="h6" component='span'>{date} &nbsp;</Typography>
            <Typography variant="h6" component='span'>{month} &nbsp;</Typography>
            <Typography variant="h6" component='span'>{year}</Typography>
        </Grid>);
}
DateBlock.displayName = `DateBlock`;
