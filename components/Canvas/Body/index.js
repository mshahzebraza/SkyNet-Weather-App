import { Grid } from "@mui/material";
import { DateBlock } from "./DateBlock";
import { LocationBlock } from "./LocationBlock";
import { TimeBlock } from "./TimeBlock";

export const Body = ({ location, current }) => {
    return (<>
        <Grid item> App Header: Time </Grid>
        <Grid item>
            <LocationBlock location={location} />
            <TimeBlock epochTime={location?.localtime_epoch} />
            <DateBlock epochTime={location?.localtime_epoch} />
        </Grid>
        <Grid item> App Main: Weather </Grid>
        <Grid item> App Footer: Last Updated </Grid>
    </>);
}

