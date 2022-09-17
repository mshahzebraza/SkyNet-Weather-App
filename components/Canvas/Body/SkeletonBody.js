import { Grid, Skeleton } from "@mui/material"

export const SkeletonBody = () => {
    return (
        <>
            <Grid item container>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: '100%',
                        height: 40
                    }}
                />
            </Grid>
            <Grid item xs container>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </Grid>
            <Grid item xs container>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: '100%',
                        height: "100%"
                    }}
                />
            </Grid>
        </>
    )
}
SkeletonBody.displayName = `Canvas-Body-Skeleton`;
