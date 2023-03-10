import { SliderDeportes } from "../components/sliders/SliderDeportes"
import { SliderPrincipal } from "../components/sliders/SliderPrincipal"
import { TopNav } from "../components/TopNav"
import { Box } from '@mui/material'

export const Home = () => {
    return (
        <>
            <TopNav />
            <Box mb={2}>
                <SliderPrincipal />
            </Box>
            <SliderDeportes />
        </>
    )
}