import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { SearchBtn } from './SearchBtn';
import { CloseBtn } from './CloseBtn';


export const SearchBar = ({ query, setQuery }) => {
    const containerStyles = {
        px: 2,
        py: 1,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        background: '#F6F6F6',
        boxShadow: 'none'
    }

    return (
        <Paper
            component="form"
            sx={containerStyles}
        >

            <InputBase
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ flex: 1 }}
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
