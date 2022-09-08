import { Paper } from '@mui/material';
import React from 'react'



const Card = ({ children }) => {
    return (
        <Paper>
            {children}
        </Paper>
    )
}

export default Card;