import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import SkillParticles from "../Animations/SkillParticles";

type CardItem = {
    label: string;
    count: string;
    text: string;
    color?: string;
};

const cardItems: CardItem[] = [
    { label: 'year-count', count: '3', text: 'YEARS WITH TCS'},
    { label: 'project-count', count: '5', text: 'PAYMENT PROJECT COMPLETED'},
    { label: 'tech-count', count: '12', text: 'TECHNOLOGY EXPERTISE'},
]

export default function Experience() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const highlightSection = (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                flexDirection: {xs: 'row', sm: 'row', md: 'column'},
                alignItems: { xs: 'center', sm: 'center', md:'flex-start'},
                justifyContent: {xs: 'center', sm: 'center', md: 'flex-start'}
            }}
        >
            {cardItems.map(item => (
                <Box
                    key={item.label}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', sm: 'center', md: 'flex-start'},
                        justifyContent: {xs: 'center', sm: 'center', md: 'flex-start'},
                        textAlign: { xs: 'center', sm: 'center', md: 'left'},
                        pl: {xs: 2, sm: 5, md: 35},
                        mb: 10,
                        mt: isMobile ? 5 : 0,
                    }}
                >
                    <Typography sx={{fontSize: { xs: '1.5rem', sm: '1.5rem', md: '3rem'}, fontWeight: 500 }}>+{item.count}</Typography>
                    <Typography sx={{fontSize: { xs: '0.5rem', sm: '0.5rem', md: '1rem'}, color: '#C5C5D1'}}>{item.text}</Typography>
                </Box>
            ))}
        </Box>
    )
    
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                px: {xs: 2, sm: 6, md: 20},
                gap: 4,
                my: 6
            }}
        > 
            <Box
                sx={{
                    flex: 1,
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden",
                    my: 8,
                }}
            >
                {/* Animated skill section - Background */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                    }}
                >
                    <SkillParticles />
                </Box>
                {/* Foreground current role section */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        height: "100%",
                        display: "flex",
                        flexDirection: {xs: 'column', sm: 'column', md: 'row'}
                    }}
                >
                    {/* Current role text containers */}
                    <Box 
                        sx={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "column",
                            textAlign: {xs: 'center', sm: 'center', md: 'left'},
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 500,
                                fontSize: { xs: '1.0rem', sm: '1.2rem', md: '4rem' },
                                color: '#494848'
                            }}
                        >
                            CURRENT ROLE
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 500,
                                fontSize: { xs: '1.7rem', sm: '2.0rem', md: '1.5rem' },
                                color: '#00000',
                                my: 12
                            }}
                        >
                            Software Developer @ Tata Consultancy Services Canada Inc.
                        </Typography>
                        
                        {/* Experience highlight section */}
                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: {xs: 'center', sm: 'center', md: 'left'}
                            }}>
                            <Typography sx={{ color: "#494848", fontSize: {xs: '0.8rem', sm: '1.0rem', md: '1.2rem'}, my: 1 }}>AWS CLOUD DEVELOPMENT</Typography>
                            <Typography sx={{ color: "#494848", fontSize: {xs: '0.8rem', sm: '1.0rem', md: '1.2rem'}, my: 1 }}>PAYMENT SYSTEM</Typography>
                            <Typography sx={{ color: "#494848", fontSize: {xs: '0.8rem', sm: '1.0rem', md: '1.2rem'}, my: 1 }}>CLOUD MIGRATION</Typography>
                        </Box>
                    </Box>

                    {/* Current role count icon section */}
                    {highlightSection}
                </Box>
            </Box>
        </Box>
    )
}