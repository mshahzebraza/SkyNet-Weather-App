import { Typography, Grid, Box } from "@mui/material";
import { formatDigits, formatHours12 } from "../../../../lib/helpers";






function TemperatureRow({ tempLabel, value }) {
    const containerStyles = {
        // width: 5
    }

    return (
        <Grid item container gap={2.75} sx={containerStyles} alignItems='end' justifyContent='space-between' >
            <Typography variant="subtitle2" component='p'>{tempLabel}<br />Temperature: </Typography>
            <Typography variant="h4" component='p'>{value}&deg;C</Typography>
        </Grid>
    );
}


export const TemperatureBlock = ({ actualTemp, feelslikeTemp }) => {
    return (
        <Grid item xs/* ='auto' */ container gap={2.75} direction='column' justifyContent='center'   >
            <TemperatureRow value={actualTemp} tempLabel={'Actual'} />
            <TemperatureRow value={feelslikeTemp} tempLabel={'Feels Like'} />

        </Grid>);
}
TemperatureBlock.displayName = `TemperatureBlock`;
