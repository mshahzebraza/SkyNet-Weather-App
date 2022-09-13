import { Grid, IconButton, Typography } from "@mui/material";
import { NextImage } from "../../ui/stateBlocks/NextImage";


export const LabelValueIcon = ({ label = 'Condition', value, icon: Icon, imagePath, isMini = false, sx: customSX, ...restProps }) => {

    const ctnStyles = {
        flexDirection: { md: 'row', lg: 'row' },
        textAlign: { md: 'center' },
        alignItems: 'center',
        justifyContent: { xs: 'center' },
        wrap: "nowrap",
        gap: { xs: 1.25, sm: 3, md: 1 },
        // justifyContent: { xs: 'stretch', sm: 'flex-start' },
        // gap: { xs: 0, sm: 1.25 },
        ...customSX
    }

    const mediaBlockStyles = {}

    const textBlockStyles = {
        gap: 0.65,
        flexDirection: { xs: 'column' },
        alignItems: { xs: 'flex-start', md: 'center' },
        // flexDirection: { xs: 'row', sm: 'column' },
        // justifyContent: { xs: 'space-between', sm: 'flex-start' },
        // flex: { xs: 1, sm: 'auto' },
    }


    return (
        <Grid
            item
            container
            sx={ctnStyles}
            {...restProps}
        >
            <Grid
                item
                xs='auto'
                sx={mediaBlockStyles}
            >

                {
                    Icon ?
                        <IconButton  >
                            <Icon />
                        </IconButton>
                        :
                        <NextImage src={imagePath} width={75} height={75} />
                }

            </Grid>
            <Grid
                item
                container
                xs='auto'
                md={12}
                sx={textBlockStyles}
            >
                <Typography variant="subtitle2" component='p' >{label}</Typography>
                <Typography variant="h5" component='p' >{value}</Typography>
            </Grid>
        </Grid>);
}

LabelValueIcon.displayName = `LabelValueIcon`;
