import { Grid } from "@mui/material";
import { getFromEpoch } from "../../../../lib/helpers";
import { LabelValue } from '../../reusable/LabelValue'



export const ForecastRow = ({ forecast }) => {

    const { dateEpoch, avgTemp, chancesOfRain, text, icon, sunrise, sunset } = forecast;

    const { date, month, year } = getFromEpoch(dateEpoch * 1000)
    const rowStyles = {
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 4, md: 0 },
    }

    const primaryBlockStyles = {
        // flexDirection: { xs: 'row', md: 'column' },
        justifyContent: { xs: 'space-between', sm: 'center', md: 'flex-start' },
        alignItems: { sm: 'center', md: 'flex-start' },
    }

    const conditionBlockStyles = {
        // alignItems: { sm: 'center', md: 'flex-start' },
        // flexDirection: { xs: 'row', md: 'column' },
        // order: 4,
    }
    return (
        <Grid item container alignItems='center' justifyContent='space-between' sx={rowStyles}   >

            <LabelValue
                label={'Date'}
                value={`${date} ${month}, ${year}`}
                xs={12}
                md={2.2}
                sx={primaryBlockStyles}
            />
            {/* <Divider orientation='vertical' sx={dividerStyles} /> */}

            <LabelValue
                label={'Average Temp'}
                value={`${avgTemp}\u00B0C`}
                xs={12}
                sm={5}
                md={2.2}
            // sx={{ alignItems: { sm: 'center' } }}
            />

            <LabelValue
                // imagePath={'https:' + icon}
                label='Condition'
                value={text}
                xs={12}
                sm={5}
                md={3.2}
                sx={conditionBlockStyles}

            // isMini
            />
            <LabelValue
                // icon={WbSunny}
                label={'Sunrise'}
                value={sunrise}
                xs={12}
                sm={5}
                md={2.2}
            // isMini
            />
            <LabelValue
                // icon={Nightlight}
                label={'Sunset'}
                value={sunset}
                xs={12}
                sm={5}
                md={2.2}
            // isMini
            />


            {/* <Divider orientation='vertical' sx={dividerStyles} /> */}

        </Grid>
    );
}

ForecastRow.displayName = `ForecastRow`;
