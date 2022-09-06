import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";


function SearchBtn({ search }) {
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

export { SearchBtn }