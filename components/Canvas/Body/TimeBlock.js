import { Typography, Box } from "@mui/material";


export const TimeBlock = ({ epochTime }) => {
    const curTime = new Date(epochTime * 1000);
    const elems = {
        hours: curTime.getHours(),
        minutes: curTime.getMinutes(),
        seconds: curTime.getSeconds(),
    }
    const renderElems = Object.keys(elems).map(key => <p key={key} >{key}: {elems[key]}</p>)
    return (
        <Box>
            <Typography variant="h6" color="initial">Time</Typography>
            {renderElems}
        </Box>);
}