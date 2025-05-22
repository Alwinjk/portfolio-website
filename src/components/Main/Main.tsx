import { Box } from "@mui/material";
import Intro from "../Intro/Intro";
import ProfileCard from "../ProfileCard/ProfileCard";



export default function Main() {
    

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'}
            }}
        >
            <Intro />
            <ProfileCard />
        </Box>
    )
}