import { Typography, Grid, Box } from "@mui/material";
import { formatDigits, formatHours12, getFromEpoch } from "../../../../lib/helpers";


export const TimeBlock = ({ epochTime }) => {
    const { hours, hoursSuffix, minutes, seconds } = getFromEpoch(epochTime * 1000)
    const timeBlockStyles = (theme) => ({
        justifyContent: { xs: 'left', md: 'center' },
        // flex: { xs: 1, sm: 1 }
    })
    return (
        <Grid
            item
            container
            alignItems='center'
            xs={5}
            md={3.5}
            sx={timeBlockStyles}
            component='p'
        >
            <Typography variant="h6" component='span'>{hours}:&nbsp;</Typography>
            <Typography variant="h6" component='span'>{minutes}&nbsp;</Typography>
            {/* <Typography variant="h6" component='span'>{seconds}&nbsp;</Typography> */}
            <Typography variant="h6" component='span'>{hoursSuffix}</Typography>
        </Grid>);
}
TimeBlock.displayName = `TimeBlock`;
