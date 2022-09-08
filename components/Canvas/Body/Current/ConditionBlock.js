import { Typography, Grid, Box } from "@mui/material";
import { formatDigits, formatHours12 } from "../../../../lib/helpers";
import { NextImage } from "../../../ui/stateBlocks/NextImage";


export const ConditionBlock = ({ label = 'Condition', text, icon: iconPath }) => {


    return (
        <Grid item xs container alignItems='center' justifyContent='center'>
            <Grid item xs>
                <NextImage src={'https:' + iconPath} width={75} height={75} />
            </Grid>
            <Grid item xs container direction={'column'} >
                <Typography variant="subtitle2" component='p'>{label}</Typography>
                <Typography variant="h6" component='p'>{text}</Typography>
            </Grid>
        </Grid>);
}
ConditionBlock.displayName = `ConditionBlock`;
