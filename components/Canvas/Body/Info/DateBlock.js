import { Typography, Grid } from "@mui/material";
import { formatDayNum, formatDigits, formatMonthNum, getFromEpoch } from "../../../../lib/helpers";



export const DateBlock = ({ epochTime }) => {
    const { date, day, month, year } = getFromEpoch(epochTime * 1000)
    const dateBlockStyles = (theme) => ({
        justifyContent: { xs: 'end'/* , md: 'center'  */ },
        // flex: { xs: 1.5, sm: 1 }
    })
    return (
        <Grid item xs={5} md={3.5} container alignItems='center' sx={dateBlockStyles} >
            <Typography variant="h6" component='span'>{day},&nbsp;</Typography>
            <Typography variant="h6" component='span'>{date} &nbsp;</Typography>
            <Typography variant="h6" component='span'>{month}</Typography>
            {/* <Typography variant="h6" component='span'>{year}</Typography> */}
        </Grid>);
}
DateBlock.displayName = `DateBlock`;
