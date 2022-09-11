import { Divider, Grid } from "@mui/material";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";



const Canvas = ({
    query,
    setQuery,
    data,
    loading,
    error,
    ...props
}) => {

    const containerStyles = {
        px: 5,
        py: 4,
        // pt: 6.25,
        // pb: 2.5,
        backgroundColor: '#FFFFFF',
        borderRadius: 2.5
    }


    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            gap={2}
            component='main'
            sx={containerStyles}
            {...props}
        >
            <Header query={query} setQuery={setQuery} />
            <Divider sx={{ width: '100%' }} />
            <Body data={data} loading={loading} error={error} />
            <Footer lastUpdateEpoch={data?.current?.last_updated_epoch * 1000} />
        </Grid>
    )
}

export default Canvas;
Canvas.displayName = `Canvas`;
