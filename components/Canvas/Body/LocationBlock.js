import { Pin } from "@mui/icons-material";
import { Typography, Box, IconButton } from "@mui/material";


export const LocationBlock = ({ location }) => {
    if (!location) return null
    const { name: areaName, region, country } = location;

    return (
        <Box>
            <Typography variant="h6" color="initial">Location</Typography>
            <IconButton aria-label="Current Location Icon">
                <Pin />
            </IconButton>
            {areaName}, {country}
        </Box>);
}
