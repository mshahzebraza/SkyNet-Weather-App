import { Typography, Grid, Box } from "@mui/material";
import { formatDigits, formatHours12 } from "../../../../lib/helpers";





export const TemperatureBlock = ({ actualTemp, feelslikeTemp, sx: customSX, ...restProps }) => {
    const tempBlockStyles = {
        flexDirection: { xs: 'row' },
        justifyContent: 'center',
        alignContent: 'center',
        gap: { xs: 2, md: 4 },
        ...customSX
    }

    const tempRowStyles = {
        gap: { xs: 2.75, sm: 1, md: 1 },
        alignItems: { xs: 'center' },
        textAlign: { sm: 'center', md: 'left' },
        flexDirection: { sm: 'column', md: 'row' }
    }


    return (
        <Grid
            item
            container
            // justifyContent='center'
            sx={tempBlockStyles}
            {...restProps}
        >
            <TemperatureRow
                sm={5.5}
                md={12}
                value={actualTemp}
                tempLabel={'Actual'}
                sx={tempRowStyles} />
            <TemperatureRow
                sm={5.5}
                md={12}
                value={feelslikeTemp}
                tempLabel={'Feels Like'}
                sx={tempRowStyles}
            />
        </Grid>);
}
TemperatureBlock.displayName = `TemperatureBlock`;




function TemperatureRow({ tempLabel, value, sx: customSX, ...restProps }) {
    const tempRowStyles = {
        ...customSX
    }

    return (
        <Grid
            item
            container
            /* alignItems='end'  */
            justifyContent='space-between'
            sx={tempRowStyles}
            {...restProps}
        >
            <Typography variant="subtitle2" component='p'>{tempLabel}<br />Temperature: </Typography>
            <Typography variant="h4" component='p'>{value}&deg;C</Typography>
        </Grid>
    );
}

