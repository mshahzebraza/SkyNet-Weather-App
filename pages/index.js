// Dependency imports 
import styles from '../styles/Home.module.scss';

import Image from "next/image"

// Objects & Styles


// Components
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography, Button } from '@mui/material';

// Function
export default function Home(props) {

    return (
        <Box  >

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
                    A Weather app using React JS and Sass by <span className={styles.name}>M. Shahzeb Raza</span>
                </Typography>
                <Grid item container xs='auto' gap={1} >

                    <Link href={'/weather'} >
                        <Button
                            variant="contained"
                            color="nute"
                            sx={{ px: 5, py: 1 }}
                        >
                            Go To App
                        </Button>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/mshahzebraza'} >
                        <Button
                            variant="contained"
                            color="nute"
                            sx={{ px: 5, py: 1 }}
                        >
                            LinkedIn
                        </Button>
                    </Link>
                </Grid>


            </Grid>

            {/* <div className={styles.graphic}>
                        <Image src='/appScreenshot.png' alt="app screenshot" width={650} height={450} />
                    </div> */}
        </Box>
    );
}

Home.displayName = `Home`