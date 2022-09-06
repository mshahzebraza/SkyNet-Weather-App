import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



export default function SearchBar({ query, setQuery, response, loading, error }) {

    // if (loading) return 'loading...';
    // if (error) return 'error...';


    return (
        <Paper
            component="form"
            sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', width: '100%' }}
        >

            <InputBase
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ flex: 1 }}
                placeholder="Search Location"
                inputProps={{ 'aria-label': 'search weather' }}
            />

            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => setQuery('')}>
                <CloseIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
