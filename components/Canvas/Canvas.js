import { Grid } from "@mui/material";
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
        pt: 6.25,
        pb: 2.5,
        backgroundColor: '#FFFFFF',
        borderRadius: 2.5
    }


    return (
        <Grid
            container
            direction='column'
            gap={2.5}
            component='main'
            sx={containerStyles}
            {...props}
        >
            <Header query={query} setQuery={setQuery} />
            <Body data={data} loading={loading} error={error} />
            <Footer lastUpdateEpoch={data?.current?.last_updated_epoch * 1000} />
        </Grid>
    )
}

export default Canvas;
Canvas.displayName = `Canvas`;
