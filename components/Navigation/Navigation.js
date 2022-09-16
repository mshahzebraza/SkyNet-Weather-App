import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Avatar,
    Button,
    Tooltip,
    Menu,
    MenuItem
} from '@mui/material';
// import Menu from '@mui/icons-material/Menu';
// import Cloud from '@mui/icons-material/Adb';
import { Cloud, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import { LinkedIn, Email, HomeOutlined } from "@mui/icons-material";


// const pages = ['Home', 'Weather'/* , 'About' */];
const pages = [
    { label: 'Home', to: '/' },
    { label: 'Weather', to: '/weather' },
    { label: 'About', to: '/about' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Brand() {
    return (
        <>
            <Cloud sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography variant="h5" noWrap component="a" href="/" sx={{
                mr: 2,
                ml: 1,
                display: {
                    xs: 'none',
                    md: 'flex'
                },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                // color: 'inherit',
                textDecoration: 'none'
            }}>
                SKYNET
            </Typography>
        </>
    );
}

function BrandResponsive() {
    return (
        <>
            <Cloud sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
        </>
    );
}

function NavMenu(props) {
    return (
        <Box sx={{
            flexGrow: 1,
            display: {
                xs: 'none',
                md: 'flex'
            }
        }}>
            {pages.map(({ label, to }) => <Link key={label} href={to}>
                <Button
                    // disableElevation
                    onClick={props.handleCloseNavMenu} sx={{
                        m: 1,
                        px: 1.5,
                        color: 'inherit',
                        display: 'block'
                    }}>
                    {label}
                </Button>
            </Link>)}
        </Box>
    );
}

function NavMenuResponsive({ anchorElNav, handleCloseNavMenu, handleOpenNavMenu }) {
    return (
        <Box sx={{
            flexGrow: 0,
            mr: { xs: 1, md: 0 },
            display: { xs: 'flex', md: 'none' }
        }}>
            <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {pages.map(({ label, to }) => (
                    <MenuItem key={label} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{label}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

const SettingsMenu = ({ anchorElUser, handleCloseUserMenu, handleOpenUserMenu }) => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/avatars/girl.png" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

const Navigation = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="static" color='nute' enableColorOnDark sx={{ mt: .35 }} >
            <Container maxWidth="xl" sx={{ px: { xs: 3 } }}>
                <Toolbar disableGutters>
                    {/* Brand */}
                    <Brand />
                    {/* Responsive MenuIcon + MenuList */}

                    {/* Responsive Brand */}
                    <BrandResponsive />

                    {/* Pages */}
                    <NavMenu handleCloseNavMenu={handleCloseNavMenu} />
                    <NavMenuResponsive anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} handleOpenNavMenu={handleOpenNavMenu} />

                    {/* Avatar + Settings Dropdown */}
                    <SettingsMenu
                        anchorElUser={anchorElUser}
                        handleCloseUserMenu={handleCloseUserMenu}
                        handleOpenUserMenu={handleOpenUserMenu}
                    />
                </Toolbar>
            </Container>
        </AppBar >);
};
export default Navigation;
