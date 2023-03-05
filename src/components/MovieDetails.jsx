import { Button, Typography, Container, IconButton, Stack } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const MovieDetails = () => {

    const { movie } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <div className="uk-position-relative uk-margin-bottom">
                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
                </div>
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-position-top-left uk-margin-left uk-margin-top">
                    <IconButton
                        onClick={backButton}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                </div>
                <div className="uk-position-bottom-left uk-margin-left">
                    <Stack mb={2} direction="row" spacing={1}>
                        {movie.genres.map((generos) => (
                            <Link className="uk-link-reset" to={`/juegos/genre/${generos.name}`} key={generos.name}>
                                <Button className="detailsBtn uk-margin-small-right" variant="outlined">
                                    {generos.name}
                                </Button>
                            </Link>
                        ))}
                    </Stack>
                    <Typography variant="h6" color={'#fff'}>
                        {movie.title}
                    </Typography>
                </div>
            </div>
            <Container className="uk-margin-bottom" >
                <Button fullWidth={true} href={`go:${movie.id}`} variant="contained" startIcon={<PlayCircleOutlineIcon />}>
                    reproducir pelicula
                </Button>
                <hr color={"#232323"} />
                <Typography className="uk-margin-small-bottom" variant="body1">
                    Sinopsis
                </Typography>
                <Typography variant="body2" color={"gray"}>
                    {movie.overview}
                </Typography>
            </Container>
        </>
    )
}


export const loaderMovieDetails = async ({ params }) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=e9a6dda420749a57b0f4f34699998c5a&language=es-MX`);

    const movie = await res.json();

    return { movie }
}