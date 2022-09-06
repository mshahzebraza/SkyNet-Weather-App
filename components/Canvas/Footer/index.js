import { Grid, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Grid item container justifyContent='center'>
            <Typography variant="body1" >
                Made in ❤️JavaScript❤️ by <em>M.Shahzeb Raza</em>
            </Typography>
        </Grid>);
}
Footer.displayName = `Canvas-Footer`;
