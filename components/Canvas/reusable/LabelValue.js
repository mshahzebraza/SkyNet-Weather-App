import { Grid, Typography } from '@mui/material';
import React from 'react'




export const LabelValue = ({ label, value, sx: customSX, ...restProps }) => {
    const labelValueStyles = {
        flexDirection: { xs: 'row', sm: 'column' },
        justifyContent: { xs: 'space-between', sm: 'flex-start' },
        alignItems: { xs: 'center'/* , md: 'flex-start' */ },
        ...customSX
    }
    return (
        <Grid item xs='auto' container gap={0.65} {...restProps} sx={labelValueStyles}  >
            <Typography variant="overline" component='p'>{label}</Typography>
            <Typography variant="h6" component='p'>{value}</Typography>
        </Grid>
    );
}

LabelValue.displayName = `LabelValue`;
