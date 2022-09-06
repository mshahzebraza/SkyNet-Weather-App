import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function CloseBtn({ close }) {
    return (<IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={() => close('')}
    >
        <Close />
    </IconButton>);
}

export { CloseBtn }