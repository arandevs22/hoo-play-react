import { TopNav } from "../components/TopNav";
import { Box } from '@mui/material';
import GoTop from "../components/Gotop";
import { SliderTerror } from "../components/sliders/SliderTerror";

export const Home = () => {
    return (
        <>
            <TopNav />
            <Box mb={3}>
                <SliderTerror />
            </Box>
            <GoTop />
        </>
    )
}