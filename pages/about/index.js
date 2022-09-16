// Dependency imports 
import Image from "next/image"

// Objects & Styles
// Components
import Link from 'next/link';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import { LinkedIn, Email, HomeOutlined } from "@mui/icons-material";
// Function


const btnArr = [
    {
        label: "Go To App",
        to: '/',
        icon: HomeOutlined
    },
]

const BtnLink = ({ label = 'default', to = '/', icon: Icon = null, external = false }) => {

    const bodyJSX = <>
        <Link href={to} /* passHref */ >
            <Button
                startIcon={Icon && <Icon />}
                variant="contained"
                color="nute"
                sx={{ px: 5, py: 1 }}
            >
                {label}
            </Button>

        </Link>
    </>

    if (external) { // wrap in "target: blank"
        return <a target='_blank'>{bodyJSX}</a>;
    } else {
        return bodyJSX
    }

}
export default function Home(props) {

    return (
        <Container  >

            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                gap={2}
            >
                <Typography variant="h2" color='white' >
                    About the Project
                </Typography>

                <Typography
                    variant="body1"
                    textAlign='center'
                    color='white'
                    sx={{
                        opacity: .8,
                        maxWidth: 680,
                        mx: 3
                    }} >
                    A Weather app using React JS and Sass by <strong>M. Shahzeb Raza</strong>

                    This app was created as a personal portfolio project. It pulls data <Link href='https://api.weatherapi.com/v1' passHref ><a target='_blank' >WeatherAPI</a></Link> to display the <strong>current weather condition for the searched location</strong> as well as the <strong>forecast weather for the next 3 days</strong>.
                </Typography>

                <Grid item container xs='auto' gap={1} >
                    {
                        btnArr.map(
                            (btnData, idx) => (<BtnLink key={idx} {...btnData} />)
                        )
                    }

                </Grid>


            </Grid >

            {/* <div className={styles.graphic}>
                        <Image src='/appScreenshot.png' alt="app screenshot" width={650} height={450} />
                    </div> */}
        </Container >
    );
}

Home.displayName = `Home`