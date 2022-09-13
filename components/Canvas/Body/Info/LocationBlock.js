import { Typography, Grid, Box, IconButton } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const LocationBlock = ({ location }) => {
    if (!location) return null
    const { name: areaName, region, country } = location;
    const locationBlockStyles = (theme) => ({
        justifyContent: { xs: 'center', md: 'flex-start' },
    })

    return (
        <Grid item xs={12} md={3.5} container alignItems='center' sx={locationBlockStyles} >
            <IconButton aria-label="Current Location Icon" /* sx={{ color: "inherit" }} */ size='small' >
                <LocationOnOutlinedIcon />
            </IconButton>
            <Typography variant="h6" component='p' >
                {areaName},&nbsp;{country}
            </Typography>
        </Grid>);
}
LocationBlock.displayName = `LocationBlock`;
