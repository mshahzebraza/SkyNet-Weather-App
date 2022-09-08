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
    return (
        <Grid
            container
            direction='column'
            gap={2}
            component='main'
            {...props}
        >
            <Header query={query} setQuery={setQuery} />
            <Body data={data} loading={loading} error={error} />
            <Footer />
        </Grid>
    )
}

export default Canvas;
Canvas.displayName = `Canvas`;
