import { Grid, Typography } from "@mui/material";
import { Credits } from './Credits'
import { SkeletonFooter } from "./SkeletonFooter";
import { UpdateLogger } from './UpdateLogger'

SkeletonFooter

export const Footer = ({ data, loading }) => {

    const footerStyles = {
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1 }
    }

    if (!!loading) return <SkeletonFooter />
    return (
        <Grid item container justifyContent='space-between' sx={footerStyles} >
            <UpdateLogger lastUpdateEpoch={data?.current?.last_updated_epoch * 1000} />
            <Credits />
        </Grid>);
}
Footer.displayName = `Canvas-Footer`;
