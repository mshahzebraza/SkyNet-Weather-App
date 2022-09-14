// Dependency imports 
import Image from "next/image"

// Objects & Styles
// Components
import Link from 'next/link';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import { LinkedIn, Email, HomeOutlined } from "@mui/icons-material";
// Function
export default function Home(props) {

    return (
        <Container  >

            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                gap={4}
            >
                <Typography variant="h1" color='white' >
                    Weather <br />Application
                </Typography>
                <Typography variant="h5" color='white' sx={{ opacity: .8 }} >
                    A Weather app using React JS and Sass by <strong>M. Shahzeb Raza</strong>
                </Typography>
                <Grid item container xs='auto' gap={1} >

                    <Link href={'/weather'} >
                        <Button
                            startIcon={<HomeOutlined />}
                            variant="contained"
                            color="nute"
                            sx={{ px: 5, py: 1 }}
                        >
                            Go To App
                        </Button>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/mshahzebraza'} passHref >
                        <a target='_blank' >
                            <Button
                                startIcon={<LinkedIn />}
                                variant="contained"
                                color="nute"
                                sx={{ px: 5, py: 1 }}
                            >
                                LinkedIn
                            </Button>
                        </a>

                    </Link>
                    <Link href={'mailto:m.shahzebraza.97@gmail.com'} >
                        <a target='_blank' >

                            <Button
                                startIcon={<Email />}
                                variant="contained"
                                color="nute"
                                sx={{ px: 5, py: 1 }}
                            >
                                Email
                            </Button>
                        </a>
                    </Link>

                </Grid>


            </Grid>

            {/* <div className={styles.graphic}>
                        <Image src='/appScreenshot.png' alt="app screenshot" width={650} height={450} />
                    </div> */}
        </Container>
    );
}

Home.displayName = `Home`