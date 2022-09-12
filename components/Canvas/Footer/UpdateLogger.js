import { Grid, Typography } from "@mui/material"
import { getFromEpoch } from "../../../lib/helpers"


export const UpdateLogger = ({ lastUpdateEpoch }) => {

    const { date, month, year, hours, minutes, hoursSuffix, } = getFromEpoch(lastUpdateEpoch)

    const styles = {
        textAlign: { xs: 'center', sm: 'left' }
    }
    return (
        <Typography variant='body1' sx={styles} >
            <strong>Last Updated:&nbsp;</strong>
            {hours}: {minutes}: {hoursSuffix},&nbsp;
            {date}-{month}
        </Typography>
    )

}
