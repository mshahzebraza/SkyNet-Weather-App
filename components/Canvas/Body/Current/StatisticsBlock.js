import { Air, Cloud, Opacity } from "@mui/icons-material";
import { Typography, Grid, Box, IconButton, Divider } from "@mui/material";
import { formatDigits, formatHours12 } from "../../../../lib/helpers";
import { NextImage } from "../../../ui/stateBlocks/NextImage";



export const StatisticsBlock = ({ wind, windDirection, humidity, cloud, isDay, sx: customSX, ...restProps }) => {
    const dividerStyles = {
        // height: { sm: '100%', md: '100%' },
        // width: { sm: 'auto', md: '100%' },
        display: { xs: 'none', md: 'none' },
    }

    const statisticBlockStyles = {
        gap: { xs: 1, md: 1 },
        alignContent: 'center',

        // flexDirection: { md: 'column' },
        justifyContent: { xs: 'center' },
        alignItems: { xs: 'center' },
        ...customSX
    }



    return (
        <Grid item container sx={statisticBlockStyles}  {...restProps}>

            <StatisticsRow
                xs={12}
                sm={3.5}
                md={12}
                icon={Air}
                label={'Wind'}
                value={wind}
                suffix={'kph'}
            />
            {/* <Divider sx={dividerStyles} /> */}
            <StatisticsRow
                icon={Opacity}
                xs={12}
                sm={3.5}
                md={12}
                label={'Humidity'}
                value={humidity}
                suffix={'%'}
            />
            {/* <Divider sx={dividerStyles} /> */}
            <StatisticsRow
                icon={Cloud}
                xs={12}
                sm={3.5}
                md={12}
                label={'Cloud'}
                value={cloud}
                suffix={'%'}
            />
        </Grid >
    );
}
StatisticsBlock.displayName = `StatisticsBlock`;



function StatisticsRow({ icon: StatIcon, label, value, suffix, sx: customSX, ...restProps }) {
    const statRowStyles = {
        flexDirection: { sm: 'column', md: 'row' },
        justifyContent: { xs: 'space-between' },
        alignItems: { xs: 'center' },
        gap: { xs: 1, md: 1.25 },
        ...customSX
    }

    const labelBlockStyles = {
        alignItems: 'center',
        gap: { sm: 1 }
    }
    const valueBlockStyles = {
        // justifyContent: 'center',
        alignItems: { xs: 'flex-end', md: 'center' },
        gap: 0.6,
        ml: { sm: 3, md: 0 }
    }
    return (
        <Grid item container /* py={1} */ sx={statRowStyles} {...restProps} >
            <Grid item xs='auto' container sx={labelBlockStyles} >
                <IconButton><StatIcon /></IconButton>
                <Typography variant="subtitle2">{label}</Typography>
            </Grid>
            <Grid item xs='auto' container sx={valueBlockStyles} >
                <Typography variant="h5" >{value}</Typography>
                <Typography variant="caption">{suffix}</Typography>
            </Grid>
        </Grid>
    );
}
