import { Grid, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";

export const Header = ({ title = 'SkyNet', query, setQuery }) => {
    return (
        <Grid
            item
            container
            justifyContent={'space-between'}
            alignItems='center'
            gap={40}
        >
            <Grid item xs='auto' >
                <Typography variant='h3' >
                    {title}
                </Typography>
            </Grid>
            <Grid item xs >
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                />
            </Grid>
        </Grid>
    );
}
Header.displayName = `Canvas-Header`;
