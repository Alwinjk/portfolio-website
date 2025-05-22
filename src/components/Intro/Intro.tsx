import { 
    Box, 
    Button, 
    Card,
    CardContent, 
    Typography, 
    useMediaQuery, 
    useTheme
} from "@mui/material";

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
                flexDirection: {xs: 'column', sm: 'row', md: 'row'},
                flexWrap: 'wrap',
                alignItems: {
                    xs: 'center', // cards will align center in a column for mobile
                    sm: 'center', // have no effect as cards are placed in row for tabs
                }, // for column
                justifyContent: {
                    xs: 'left', // have no effect as cards are placed in column for mobile
                    sm: 'center', // cards will align to the center for tab in a row
                    md: 'left' // cards will align to the left for desktop in a row
                }, // for row
                mt: 10,
                gap: 4
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
        // intro main container. Job title, description and skill card sections go here.
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                // alignItems: 'center',
                // justifyContent: 'center',
                // minHeight: '70vh',
                px: {xs: 2, sm: 6, md: 20},
                gap: 4
            }}
        > 
            {/* Left Side (Title + Horizontal Line + Description) */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: {xs: 'center', sm: 'center', md: 'left'},
                    textAlign: {xs: 'center', sm: 'center', md: 'left'},
                    // justifyContent: {xs: 'center', sm: 'center', md: 'left'}
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2.3rem', sm: '4.0rem', md: '7rem' },
                        color: 'rgba(255, 255, 255)'
                    }}
                >
                    SOFTWARE
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2.3rem', sm: '4.0rem', md: '7rem' },
                        color: '#494848'
                    }}
                >
                    ENGINEER
                </Typography>

                {/* Horizontal line */}
                <Box
                    sx={{
                        mt: 1,
                        mx: { xs: 'auto', sm: 'auto', md: 0 }, // auto will center and 0 will put on left
                        width: {xs: 200, sm: 343, md: 532},
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
            {/* <Box
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
                    {/* <Box
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
            </Box> */}

            

        </Box>
        
    )
}