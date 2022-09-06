import { Grid } from "@mui/material";



const Canvas = ({ children, ...props }) => {
    return (
        <Grid
            container
            direction='column'
            gap={2}
            component='main'
            {...props}
        >
            {children}
        </Grid>
    )
}

export default Canvas;
Canvas.displayName = `Canvas`;
