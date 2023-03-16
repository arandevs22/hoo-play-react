import { Button, Typography, Container, IconButton, Box, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoTop from "./Gotop";

export const SeriesSeasons = () => {

    const navigate = useNavigate();

    const { seriesSeasons } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <Box>
                <div className="uk-position-relative">
                    <div className="uk-background-cover uk-height-medium series uk-panel uk-flex uk-flex-center uk-flex-middle " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${seriesSeasons.poster_path})` }}>
                    </div>
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="uk-position-top-left uk-margin-left uk-margin-top">
                        <IconButton
                            onClick={backButton}
                        >
                            <ArrowBackIcon className="backBtn" />
                        </IconButton>
                    </div>
                    <div className="uk-position-bottom uk-margin-left">
                        <Typography mb={1} variant="h5" color={'#fff'}>
                            {seriesSeasons.name}
                        </Typography>
                        <Typography variant="subtitle1" color="rgba(255, 255, 255, 0.7)">
                            Fecha de estreno {seriesSeasons.air_date}
                        </Typography>
                    </div>
                </div>
            </Box>
            <Container>
                <Typography mb={2} variant="body2" color={"rgba(255, 255, 255, 0.7)"}>
                    {seriesSeasons.overview}
                </Typography>
                <Box mb={3}>
                    {seriesSeasons.episodes.map((episode) => (
                        <Box mb={1} key={episode.id}>
                            <Card >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={`https://image.tmdb.org/t/p/original${episode.still_path}`}
                                    title={episode.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {episode.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color={"rgba(255, 255, 255, 0.7)"}>
                                        Temporada {seriesSeasons.season_number} · Episodio {episode.episode_number}
                                    </Typography>
                                    <Typography variant="subtitle2" color={"rgba(255, 255, 255, 0.7)"}>
                                        {episode.air_date}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => navigate(`/series/id/${episode.show_id}/season/${seriesSeasons.season_number}/episode/${episode.episode_number}`)} size="small" className="season">
                                        ver episodio
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
            <GoTop />
        </>
    )
}


export const loaderSeriesSeasons = async ({ params }) => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}?api_key=e9a6dda420749a57b0f4f34699998c5a&language=es-MX`);

    const seriesSeasons = await res.json();

    return { seriesSeasons }
}