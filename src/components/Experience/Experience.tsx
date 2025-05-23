import { Box, Typography } from "@mui/material";
import SkillParticles from "../Animations/SkillParticles";

    export default function Experience() {

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
                        // height: 450, // set desired height
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
                            flexDirection: "column",
                            // justifyContent: "left",
                            // alignItems: "center",
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
                            <Typography sx={{ color: "#494848", fontSize: '1.2rem', my: 1 }}>PAYMENT SYSTEM</Typography>
                            <Typography sx={{ color: "#494848", fontSize: '1.2rem', my: 1 }}>CLOUD MIGRATION</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Count Icons section */}
                <Box

                >

                </Box>
            </Box>
        )
    }