import { Typography, Grid, Divider } from "@mui/material";
import { formatDigits, formatHours12, getFromEpoch } from "../../../../lib/helpers";
import { NextImage } from "../../../ui/stateBlocks/NextImage";
import { LabelValueIcon } from "../../reusable/LabelValueIcon";
import { LabelValue } from '../../reusable/LabelValue'
import { Nightlight, WbSunny } from "@mui/icons-material";



function ForecastElement({ label, value, ...restProps }) {
    return (
        <Grid item xs='auto' container direction={'column'} {...restProps} >
            <Typography variant="overline" component='p'>{label}</Typography>
            <Typography variant="h6" component='p'>{value}</Typography>
        </Grid>
    );
}




export const ForecastRow = ({ forecast }) => {

    const dividerStyles = {
        background: '#10101033',
        height: '100%',
    }


    const { dateEpoch, avgTemp, chancesOfRain, text, icon, sunrise, sunset } = forecast;

    const { date, month, year } = getFromEpoch(dateEpoch * 1000)

    return (
        <Grid item xs gap={4} container alignItems='center' justifyContent='space-between'  >

            <LabelValue
                label={'Date'}
                value={`${date} ${month}, ${year}`}
            />
            <Divider orientation='vertical' sx={dividerStyles} />

            <LabelValueIcon
                label='Condition'
                value={text}
                imagePath={'https:' + icon}
                isMini
            />
            <Divider orientation='vertical' sx={dividerStyles} />

            <LabelValue
                label={'Average Temp'}
                value={`${avgTemp}\u00B0C`}
            />
            <LabelValueIcon
                icon={WbSunny}
                label={'Sunrise'}
                value={sunrise}
            />
            <LabelValueIcon
                icon={Nightlight}
                label={'Sunset'}
                value={sunset}
            />
        </Grid>
    );
}

ForecastRow.displayName = `ForecastRow`;
