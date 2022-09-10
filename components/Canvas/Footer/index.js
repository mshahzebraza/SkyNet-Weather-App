import { Grid, Typography } from "@mui/material";
import { getFromEpoch } from "../../../lib/helpers";
import { Credits } from './Credits'
import { UpdateLogger } from './UpdateLogger'



export const Footer = ({ lastUpdateEpoch }) => {
    if (!lastUpdateEpoch) return 'No Response ...'

    return (
        <Grid item container justifyContent='space-between'>
            <UpdateLogger lastUpdateEpoch={lastUpdateEpoch} />
            <Credits />
        </Grid>);
}
Footer.displayName = `Canvas-Footer`;
