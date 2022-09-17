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
        maxWidth: 'xl',
        m: 'auto',
        px: 5,
        py: 4,
        // pt: 6.25,
        // pb: 2.5,
        backgroundColor: '#FFFFFF',
        borderRadius: 2.5,
        gap: { xs: 2, md: 2 }
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
            <Header query={query} setQuery={setQuery} error={error} />
            <Divider sx={{ width: '100%' }} />

            {!error
                ? <Body data={data} loading={loading} />
                : <ErrorText />
            }
            {
                !error && <Footer data={data} loading={loading} />
            }
        </Grid>
    )
}

export default Canvas;
Canvas.displayName = `Canvas`;
