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
                <Typography mb={2} variant="body2" color={"rgba(255, 255, 255, 0.7)"}>
                    {serie.overview}
                </Typography>
                {serie.seasons.map((season) => (
                    <Box mb={1}>
                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 100 }}
                                image={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        {season.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="rgba(255, 255, 255, 0.7)" component="div">
                                        {season.episode_count} episodios
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <Button className='season'>
                                        Ver Episodios
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                    </Box>

                ))}
            </Container>
        </>
    )
}


export const loaderSerieDetails = async ({ params }) => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=e9a6dda420749a57b0f4f34699998c5a&language=es-MX`);

    const serie = await res.json();

    return { serie }
}