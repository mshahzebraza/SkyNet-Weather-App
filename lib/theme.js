import { colors, createTheme, responsiveFontSizes } from "@mui/material";
import { myComponents } from "./themeComponents/myComponents";
import { myPalette } from "./themeComponents/myPalette";
import { myTypography } from "./themeComponents/myTypography";


export const theme = responsiveFontSizes(createTheme({
    // set the colors, spacing, fontSizes etc for the theme
    palette: myPalette,
    typography: myTypography,
    components: myComponents,
}))
