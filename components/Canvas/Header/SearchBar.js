import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { SearchBtn } from './SearchBtn';
import { CloseBtn } from './CloseBtn';


function SearchBar({ query, setQuery }) {

    return (
        <Paper
            component="form"
            sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', width: '100%' }}
        >

            <InputBase
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ flex: 1 }}
                placeholder="Search for Coordinates, Areas, Country ..."
                inputProps={{ 'aria-label': 'search weather' }}
            />

            <CloseBtn close={setQuery} />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <SearchBtn search={() => console.log('Searching')} />
        </Paper>
    );
}
export { SearchBar };