import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { SearchBtn } from './SearchBtn';
import { CloseBtn } from './CloseBtn';
import { InputLabel } from '@mui/material';


export const SearchBar = ({ query, setQuery, error = false }) => {
    const containerStyles = {
        px: 2,
        // py: 1,
        display: 'flex',
        // justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        background: '#F6F6F6',
        boxShadow: 'none',
        // boxShadow: 'inset 0 0 0 2px #b52020',
    }

    const inputStyles = {
        flex: 1,
    }


    if (error) {
        inputStyles.color = '#b52020';
        containerStyles.boxShadow = 'inset 0 0 0 2px #b52020';
    }

    return (
        <Paper
            component="form"
            sx={containerStyles}
        >

            <InputBase
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={inputStyles}
                placeholder="Search for Coordinates, Areas, Country ..."
                inputProps={{ 'aria-label': 'search weather' }}
            />

            {!!query && <CloseBtn close={setQuery} />}
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <SearchBtn search={() => console.log('Searching')} />
        </Paper>
    );
}
SearchBar.displayName = `SearchBar`;
