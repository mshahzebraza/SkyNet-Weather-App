import { Grid, IconButton, Typography } from "@mui/material";
import { NextImage } from "../../ui/stateBlocks/NextImage";


export const LabelValueIcon = ({ label = 'Condition', value, icon: Icon, imagePath, isMini = false, ...restProps }) => {

    const dynProps = {
        container: isMini ? { gap: 1.25 } : { gap: 2.5 },
        image: isMini ? { width: 62, height: 62 } : { width: 100, height: 100 },
        label: isMini ? { variant: 'overline' } : { variant: 'subtitle2' },
        value: isMini ? { variant: 'h6' } : { variant: 'h5' },
        icon: isMini ? { size: 'small' } : {}
    }

    return (
        <Grid item xs='auto' container alignItems='center' justifyContent='center' wrap="nowrap" {...dynProps.container} {...restProps} >
            <Grid item xs="auto" >
                {
                    Icon ?
                        <IconButton {...dynProps.icon} >
                            <Icon />
                        </IconButton>
                        :
                        <NextImage src={imagePath} {...dynProps.image} />
                }

            </Grid>
            <Grid item xs container direction={'column'} >
                <Typography {...dynProps.label} component='p' >{label}</Typography>
                <Typography {...dynProps.value} component='p' >{value}</Typography>
            </Grid>
        </Grid>);
}

LabelValueIcon.displayName = `LabelValueIcon`;
