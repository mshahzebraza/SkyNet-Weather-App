import { Typography, Grid, Box } from "@mui/material";
import { formatDigits, formatHours12 } from "../../../../lib/helpers";
import { NextImage } from "../../../ui/stateBlocks/NextImage";


export const ConditionBlock = ({ label = 'Condition', text, icon: iconPath, isMini = false, ...restProps }) => {

    const dynProps = {
        container: isMini ? { gap: 1.25 } : { gap: 2.5 },
        image: isMini ? { width: 62, height: 62 } : { width: 100, height: 100 },
        label: isMini ? { variant: 'overline' } : { variant: 'subtitle2' },
        text: isMini ? { variant: 'h6' } : { variant: 'h5' },
    }


    const containerStyles = {
    }

    return (
        <Grid item xs='auto' container alignItems='center' justifyContent='center' {...dynProps.container} {...restProps} >
            <Grid item /* xs */>
                <NextImage src={'https:' + iconPath} {...dynProps.image} />
            </Grid>
            <Grid item xs='auto' container direction={'column'} >
                <Typography {...dynProps.label} component='p' >{label}</Typography>
                <Typography {...dynProps.text} component='p' >{text}</Typography>
            </Grid>
        </Grid>);
}
ConditionBlock.displayName = `ConditionBlock`;
