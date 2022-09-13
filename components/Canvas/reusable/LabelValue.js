import { Grid, Typography } from '@mui/material';
import React from 'react'




export const LabelValue = ({ label, value, sx: customSX, ...restProps }) => {
    const labelValueStyles = {
        flexDirection: { xs: 'row', sm: 'column' },
        justifyContent: { xs: 'space-between', sm: 'flex-start' },
        alignItems: { xs: 'center',/* , md: 'flex-start' */ },
        gap: { xs: 1 },
        ...customSX
    }

    const typoValueStyles = {
        textAlign: { xs: 'right', sm: 'center' },
        lineHeight: { xs: 1.2, sm: 1 }
    }

    const typoStyles = {
        flex: { xs: 1, sm: 'auto' },
    }


    return (
        <Grid item xs='auto' container  {...restProps} sx={labelValueStyles}  >
            <Typography variant="overline" component='p' sx={typoStyles} >{label}</Typography>
            <Typography variant="h6" component='p' sx={{ ...typoStyles, ...typoValueStyles }} >{value}</Typography>
        </Grid>
    );
}

LabelValue.displayName = `LabelValue`;
