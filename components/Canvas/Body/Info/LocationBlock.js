import { Typography, Grid, Box, IconButton } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const LocationBlock = ({ location }) => {
    if (!location) return null
    const { name: areaName, region, country } = location;

    return (
        <Grid item xs container alignItems='center' >
            <IconButton aria-label="Current Location Icon" sx={{ color: "#000000" }} >
                <LocationOnOutlinedIcon />
            </IconButton>
            <Box component='p' >
                <Typography variant="h6" component='span' >
                    {areaName},&nbsp;
                </Typography>
                <Typography variant="h6" component='span' >
                    {country}
                </Typography>
            </Box>
        </Grid>);
}
LocationBlock.displayName = `LocationBlock`;
