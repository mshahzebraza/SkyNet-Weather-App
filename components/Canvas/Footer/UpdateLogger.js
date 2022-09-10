import { Grid, Typography } from "@mui/material"
import { getFromEpoch } from "../../../lib/helpers"


export const UpdateLogger = ({ lastUpdateEpoch }) => {

    const { date, month, year, hours, minutes, hoursSuffix, } = getFromEpoch(lastUpdateEpoch)

    return (
        <Typography variant='body1' >
            <strong>Last Updated:&nbsp;</strong>
            {hours}: {minutes}: {hoursSuffix},&nbsp;
            {date}-{month}-{year}
        </Typography>
    )

}
