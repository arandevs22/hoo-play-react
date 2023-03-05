import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { SliderMovieChannels } from "../components/SliderMoviechannels"
import { SliderSports } from "../components/SliderSports"
import { TopNav } from "../components/TopNav"

export const Home = () => {
    return (
        <>
            <TopNav />
            <SliderSports />
            <SliderMovieChannels />
            <Link className="uk-margin-top" to={"peliculas/id/937278"}>
                Pelicula de prueba
            </Link>
        </>
    )
}