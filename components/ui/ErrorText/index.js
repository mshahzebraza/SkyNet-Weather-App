import { Grid, Typography } from '@mui/material'
import React from 'react'



export const ErrorText = () => {
    return (
        <Grid
            item
            xs
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                boxShadow: 'inset 0 0 0 2px #b52020',
                // border: '1px solid red'
            }} >
            <Typography variant="h2" color="error" >Error!</Typography>
            <Typography mt={2} variant="h4" color="error" >No Results Found</Typography>
        </Grid>
    )
}
