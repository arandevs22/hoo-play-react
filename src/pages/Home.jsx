import { SliderDeportes } from "../components/sliders/SliderDeportes";
import { SliderPrincipal } from "../components/sliders/SliderPrincipal";
import { TopNav } from "../components/TopNav";
import { Box } from '@mui/material';
import GoTop from "../components/Gotop";
import { SliderTerror } from "../components/sliders/SliderTopRank";

export const Home = () => {
    return (
        <>
            <TopNav />
            <Box mb={5}>
                <SliderPrincipal />
            </Box>
            <Box mb={3}>
                <SliderDeportes />
            </Box>
            <Box mb={3}>
                <SliderTerror />
            </Box>
            <GoTop />
        </>
    )
}