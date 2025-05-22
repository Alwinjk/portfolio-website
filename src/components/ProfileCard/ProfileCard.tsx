import { 
    Avatar,
    Box, 
    Card,
    IconButton, 
    Typography, 
} from "@mui/material";

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function ProfileCard() {

    return (
        <Box
            sx={{
                display: 'flex',   
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', md: '100%'},
                    height: 600,
                    borderRadius: 6,
                    boxShadow: 3,
                    // backgroundColor: '#F46C39'
                    background: 'linear-gradient(135deg,rgb(215, 188, 219),rgb(246, 34, 1),rgb(246, 205, 1))'
                }}
            >
                <Avatar
                    alt="Alwin Jose Kurian"
                    src="/images/profile.jpeg"
                    sx={{
                        width: '75%',
                        height: '60%',
                        borderRadius: 6,
                        boxShadow: 5,
                        mb: 3
                    }}
                />
                <Typography
                    variant="protestH1"
                    sx={{
                        fontWeight: 600,
                        letterSpacing: 1,
                        color: '#494848',
                        textAlign: 'center'
                    }}
                >
                    ALWIN JOSE KURIAN
                </Typography>
                <Typography
                    sx={{
                        letterSpacing: 1,
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    "Build. Solve. Repeat."
                </Typography>
                {/* Social media icons */}
                <Box
                    sx={{ display: 'flex', gap: 2, mt: 3 }}
                >
                    <IconButton
                        component="a"
                        href="mailto:alwinjk1997@gmail.com"
                        sx={{
                            color: 'black'
                        }}
                    >
                        <EmailIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/alwin-jose-kurian"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            color: 'black'
                        }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/Alwinjk"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            color: 'black'
                        }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.instagram.com/alwin_jose_kurian/"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            color: 'black'
                        }}
                    >
                        <InstagramIcon />
                    </IconButton>
                </Box>
            </Card>
        </Box>
    )
} 