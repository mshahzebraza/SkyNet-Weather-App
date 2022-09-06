/* IMPORTS */

// DEPENDENCIES
import { Avatar, Grid, Typography } from '@mui/material';

/* BODY */
export default function Panel(params) {
    // console.log(`Rendering PANEL`);
    return (
        <Grid container gap={2} alignItems='end' >
            <Avatar variant="rounded" src="/avatars/girl.png" />
            <Typography variant="h6" color="primary" component='p' >M.Shahzeb Raza</Typography>
        </Grid>
    )
}
Panel.displayName = 'User Info Panel'