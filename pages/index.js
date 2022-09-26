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
        to: '/weather',
        icon: HomeOutlined
    },
    {
        label: "LinkedIn",
        to: 'https://www.linkedin.com/in/mshahzebraza/',
        icon: LinkedIn,
        external: true,
    },
    {
        label: "Email",
        to: 'mailto:m.shahzebraza.97@gmail.com',
        icon: Email,
        external: true,
    }
]

const BtnLink = ({ label = 'default', to = '/', icon: Icon = null, external = false }) => {
    console.log('to: ', to)

    // Create the original component
    const btnJsx = <Button
        startIcon={Icon && <Icon />}
        variant="contained"
        color="nute"
        sx={{ px: 5, py: 1 }}
    >
        {label}
    </Button>

    // Render the component
    if (external) {
        return <Link href={to} passHref >
            <a target='_blank'>
                {btnJsx}
            </a>
        </Link>;
    } else {
        return <Link href={to}>
            {btnJsx}
        </Link>
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
                gap={4}
                wrap="nowrap"
            >
                <Typography variant="h1" color='white' >
                    Weather <br />Application
                </Typography>

                <Typography variant="h5" color='white' sx={{ opacity: .8, textAlign: "center" }} >
                    A Weather app using React JS and Sass by <strong>M. Shahzeb Raza</strong>
                </Typography>

                <Grid item container xs='auto' gap={1} justifyContent="center" >
                    {
                        btnArr.map(
                            (btnData, idx) => (<BtnLink key={idx} {...btnData} />)
                        )
                    }

                </Grid>


            </Grid>

            {/* <div className={styles.graphic}>
                        <Image src='/appScreenshot.png' alt="app screenshot" width={650} height={450} />
                    </div> */}
        </Container>
    );
}

Home.displayName = `Home`