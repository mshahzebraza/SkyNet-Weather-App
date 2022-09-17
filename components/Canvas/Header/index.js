import { Grid, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";

export const Header = ({ title = 'SkyNet', query, setQuery, error }) => {


    return (
        <Grid
            item
            container
            justifyContent={'space-between'}
            wrap='nowrap'
            sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'space-between', sm: 'center' },
                textAlign: { xs: 'center', sm: 'left' }
                // background: { xs: 'red', sm: 'yellow', md: 'green' },
            }}
            gap={2}
        >
            {/* <Grid item xs={'auto'} >
                <Typography variant='h3' >
                    {title}
                </Typography>
            </Grid> */}
            <Grid item xs={12}  >
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    error={error}
                />
            </Grid>
        </Grid>
    );
}
Header.displayName = `Canvas-Header`;
