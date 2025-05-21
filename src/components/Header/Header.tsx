import { useState, useEffect } from 'react';
import { 
    AppBar, 
    Box, 
    Drawer, 
    IconButton, 
    List, 
    ListItem,
    ListItemIcon, 
    ListItemText, 
    Toolbar, 
    Typography, 
    useMediaQuery, 
    useTheme 
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';


type NavItem = {
    label: string;
    icon: React.ReactNode; // a type that is anything which can be rendered in react. Eg: an element, a react component, string, label or anything
    path?: string;
};

const navItems: NavItem[] = [
    { label: 'Home', icon: <HomeIcon />, path: '/'},
    { label: 'Projects', icon: <FolderIcon />, path: '/projects'},
    { label: 'Contacts', icon: <EmailIcon />, path: '/contacts'},
    { label: 'About', icon: <InfoIcon />, path: '/about'}
]


export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    console.log('Is mobile:', isMobile);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setDrawerOpen(false);
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const drawer = (
        <Box
            sx={{
                width: 250,
                backgroundColor: 'rgba(0, 0, 0, 0.12)',
                height: '100%',
                color: 'white'
            }}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.label}
                        component="a"
                        href={item.path}
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.12)'
                            }
                        }}
                    >
                        <ListItemIcon sx={{ color: 'white'}}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} sx={{ color: 'white'}}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <AppBar 
            position='sticky'
            sx={{
                // backgroundColor: '#000000', // pure black background
                boxShadow: 'none'
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    backgroundColor: '#000000', // pure black background color
                    px: { xs: 2, sm: 3, md: 4},
                    maxWidth: 'xl',
                    mx: 'auto',
                    width: '100%'
                }}
            >
                {/* <Typography
                    variant="protestH1"
                    component="a"
                    href="/"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: 1,
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': {
                            color: 'primary.main'
                        }
                    }}
                >
                    Alwin Jose Kurian
                </Typography> */}
                {isMobile ? (
                    <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                            <Drawer
                                anchor="left"
                                open={drawerOpen}
                                onClose={() => setDrawerOpen(false)}
                                PaperProps={{
                                    sx: {
                                        backgroundColor: '#000000',
                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)'
                                    }
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </IconButton>
                    </>
                ) : (
                    <Box
                        component="nav"
                        sx={{
                            display: 'flex',
                            gap: 2,
                            justifyContent: 'center',
                            mx: 'auto',
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                            borderRadius: 25
                        }}
                    >
                        {navItems.map((item) => 
                            <IconButton
                                key={item.label}
                                color="inherit"
                                aria-label={item.label}
                                component="a"
                                href={item.path}
                                sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                        transform: 'scale(1.1)',
                                        backgroundColor: 'transparent'
                                    },
                                }}
                                size="large"
                            >
                                {item.icon}
                            </IconButton>
                                
                        )}                    
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    )
}