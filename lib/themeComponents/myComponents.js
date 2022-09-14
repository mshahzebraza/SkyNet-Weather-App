export const myComponents = {
    MuiButton: {
        styleOverrides: {
            // Name of the slot
            root: {
                boxShadow: 'initial',
                '&:hover, &:focus': {
                    backgroundColor: '#ff9a9a',
                    color: '#2e0101',
                    boxShadow: 'initial',
                    // color: "black"
                },
                // Some CSS
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            // Name of the slot
            root: {
                '&:hover': {
                    backgroundColor: 'initial',
                    boxShadow: 'initial',
                    // color: "black"
                },
                // Some CSS
            },
        },
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                paddingLeft: 0,
                paddingRight: 0,
                // fontSize:fontSizeStyle.fontSize,
                // Some CSS
            },
        },
    },
    // MuiCssBaseline: {

    // },
}