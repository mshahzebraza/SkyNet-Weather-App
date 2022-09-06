import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";


export const SearchBtn = ({ search }) => {
    return (
        <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={() => search('')}
        >
            <Search />
        </IconButton>);
}
SearchBtn.displayName = `SearchBtn`;