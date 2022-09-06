import InputBase from '@mui/material/InputBase';
import { useState } from 'react';


export default function SearchInput() {
    const [query, setQuery] = useState('karachi')
    console.log('query', query)

    return (
        <InputBase
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{ flex: 1 }}
            placeholder="Search Location"
            inputProps={{ 'aria-label': 'search weather' }}
        />
    );
}
