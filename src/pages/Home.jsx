import { Typography } from "@mui/material"
import { SliderMovieChannels } from "../components/SliderMoviechannels"
import { SliderSports } from "../components/SliderSports"
import { TopNav } from "../components/TopNav"

export const Home = () => {
    return (
        <>
            <TopNav />
            <SliderSports />
            <SliderMovieChannels />
        </>
    )
}