import { Typography, Grid, Box } from "@mui/material";
import { formatDigits, formatHours12 } from "../../../../lib/helpers";


export const TemperatureBlock = ({ actualTemp, feelslikeTemp }) => {

    return (
        <Grid item xs container alignItems='center' justifyContent='center'>
            <Grid item container>
                <Typography variant="subtitle2" component='p'>Actual Temperature: </Typography>
                <Typography variant="h6" component='p'>{actualTemp}</Typography>
            </Grid>

            <Grid item container>
                <Typography variant="subtitle2" component='p'>Feels Like Temperature: </Typography>
                <Typography variant="h6" component='p'> {feelslikeTemp}</Typography>
            </Grid>

        </Grid>);
}
TemperatureBlock.displayName = `TemperatureBlock`;
