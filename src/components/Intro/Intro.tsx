import { 
    Avatar,
    Box, 
    Button, 
    Card,
    CardContent, 
    IconButton, 
    Typography, 
    useMediaQuery, 
    useTheme
} from "@mui/material";

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ArrowForward } from "@mui/icons-material";

type CardItem = {
    label: string;
    path?: string;
    bgColor: string;
    color?: string
};



const cardItems: CardItem[] = [
    // { label: 'UI/UX', path: '/ui-ux', bgColor: "linear-gradient(135deg,rgb(215, 188, 219),rgb(246, 34, 1),rgb(246, 205, 1))"},
    { label: 'UI/UX', path: '/ui-ux', bgColor: "#F46C39"},
    { label: 'BACKEND', path: '/backend', bgColor: "linear-gradient(135deg,rgb(119, 113, 120),rgb(130, 138, 54),rgb(101, 94, 61))"},
    { label: 'CLOUD', path: '/cloud', bgColor: "rgb(142, 210, 130)"},
]

export default function Intro() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const skillCards = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                justifyContent: 'center',
                mt: 10,
                gap: 5,
                px: { xs: 2, sm: 4, md: 6 },               // smaller padding on small devices
                py: { xs: 3, md: 6 },
            }}
        >
            {cardItems.map((item) => (
                <Card 
                    key={item.label}
                    sx={{
                        width: {xs: 200, md:180},
                        height: {xs: 170, md: 150},
                        background: item.bgColor,
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: 4,
                        color: 'white'
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%', // Takes full width of Card
                            height: '100%', // Takes full height of Card
                            p: 2 // Adjust padding as needed
                        }}
                    >
                        <Typography 
                            variant="h5"
                            sx={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                color: item?.color,
                                fontWeight: 700
                            }}
                        >
                            {item.label}
                        </Typography>
                        <Button
                            endIcon={<ArrowForward />}
                            sx={{
                                mt: 5,
                                borderRadius: '25px',
                                background: 'rgb(100, 169, 225)',
                                '&:hover': {
                                    backgroundColor: '#1565c0',
                                },
                                color: 'white'
                            }}
                        />
                    </CardContent>
                </Card>
            ))}
        </Box>   
    )


    return (
        // intro main container. Job title and profile card should go inside here.
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70vh',
                px: {xs: 2, sm: 6, md: 20},
                gap: 4
            }}
        > 
            {/* title section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMobile ? 'center': 'flex-start',
                    textAlign: isMobile ? 'center': 'left',
                    maxWidth: { xs: '100%', sm: 'none' }
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2.5rem', sm: '4.5rem', md: '7rem' },
                        color: 'rgba(255, 255, 255)'
                    }}
                >
                    SOFTWARE
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2.5rem', sm: '4.5rem', md: '7rem' },
                        color: '#494848'
                    }}
                >
                    ENGINEER
                </Typography>

                {/* Horizontal line */}
                <Box
                    sx={{
                        mt: 1,
                        width: {xs: '200px', md: '500px'},
                        height: '2px',
                        backgroundColor: '#494848'
                    }}
                />

                {/* Intro description section */}
                <Box 
                    display="flex"
                    flexDirection="column"
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#E0D6D6',
                            fontSize: { xs: '1.0rem', sm: '1.5rem', md: '2.1rem' },
                            mt: 7,
                            textAlign: {xs: 'center', md: 'left'}
                        }}
                    >
                        Innovative software engineer passionate about providing solutions tailored to client needs. Expertises in full stack development of web applications. 
                    </Typography>
                </Box>
                

                {/* Skill card section */}
                {skillCards}
            </Box>

            
            {/* profile card section */}
            <Box
                // position="sticky"
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

            

        </Box>
        
    )
}