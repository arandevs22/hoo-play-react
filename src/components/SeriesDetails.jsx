import { Box, Button, Card, CardContent, CardMedia, Container, IconButton, Stack, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import '../styles/seriesDetails.css';



export const SerieDetails = () => {

    const { serie } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <div className="uk-position-relative">
                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${serie.backdrop_path})` }}>
                </div>
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-position-top-left uk-margin-left uk-margin-top">
                    <IconButton
                        onClick={backButton}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div className="uk-position-bottom uk-margin-left">
                    <Typography mb={1} variant="h5" color={'#fff'}>
                        {serie.name}
                    </Typography>
                </div>
            </div>
            <Container className="uk-margin-bottom" >
                <Stack mb={2} direction="row" spacing={1} >
                    {serie.networks.map((provider) => (
                        <Link className="uk-link-reset" to={`/juegos/genre/${provider.name}`} key={provider.id}>
                            <Button className="detailsBtn uk-margin-small-right" variant="outlined">
                                {provider.name}
                            </Button>
                        </Link>
                    ))}
                </Stack>
                <hr color={"#232323"} />
                <Typography className="uk-margin-small-bottom" variant="body1">
                    Sinopsis
                </Typography>
                <Typography variant="body2" color={"gray"}>
                    {serie.overview}
                </Typography>
            </Container>
        </>
    )
}


export const loaderSerieDetails = async ({ params }) => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=e9a6dda420749a57b0f4f34699998c5a&language=es-MX`);

    const serie = await res.json();

    return { serie }
}