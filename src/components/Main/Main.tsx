import { Box } from "@mui/material";
import Intro from "../Intro/Intro";
import Experience from "../Experience/Experience";

export default function Main() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Intro />
            <Experience />
        </Box>
    )
}