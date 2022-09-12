import { Grid, Typography } from "@mui/material";
import { Credits } from './Credits'
import { UpdateLogger } from './UpdateLogger'



export const Footer = ({ lastUpdateEpoch }) => {
    if (!lastUpdateEpoch) return 'No Response ...'

    const footerStyles = {
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1 }
    }

    return (
        <Grid item container justifyContent='space-between' sx={footerStyles} >
            <UpdateLogger lastUpdateEpoch={lastUpdateEpoch} />
            <Credits />
        </Grid>);
}
Footer.displayName = `Canvas-Footer`;
