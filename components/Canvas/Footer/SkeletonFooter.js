import { Grid, Skeleton } from "@mui/material"

export const SkeletonFooter = () => {
    return (
        <>
            <Grid item container>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: '100%',
                        height: 50
                    }}
                />
            </Grid>
        </>
    )
}
SkeletonFooter.displayName = `Canvas-Body-Skeleton`;
