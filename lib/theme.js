import { colors, createTheme } from "@mui/material";
import { myPalette } from "./themeComponents/myPalette";
import { myTypography } from "./themeComponents/myTypography";


export const theme = createTheme({
    // set the colors, spacing, fontSizes etc for the theme
    palette: myPalette,

    typography: myTypography,
    components: {
        // MuiCssBaseline: {

        // },
    },
})


theme.props = {
    // pass in the default props for specific components. E.g let the button have the "contained" prop set as default
}

theme.overrides = {
    // override the styles for a given components available in MUI system. Much like theme.props but is more specific as props don't control all the styling of the component.
}