import { Typography } from "@mui/material";



export const Credits = () => {

    const styles = {
        textAlign: { xs: 'center', sm: 'left' }
    }

    return (
        <Typography variant="body1" sx={styles} >
            Made by <strong>M.Shahzeb Raza</strong> in JavaScript❤️
        </Typography>
    );
}
