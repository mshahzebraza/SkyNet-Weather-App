import { Typography, Box } from "@mui/material";

export const DateBlock = ({ epochTime }) => {
    const curTime = new Date(epochTime * 1000);
    const elems = {
        date: curTime.getDate(),
        day: curTime.getDay(),
        month: curTime.getMonth(),
        year: curTime.getFullYear(),
    }
    const renderElems = Object.keys(elems).map(key => <p key={key}>{key}: {elems[key]}</p>)
    return (
        <Box>
            <Typography variant="h6" color="initial">Date</Typography>
            {renderElems}
        </Box>);
}
