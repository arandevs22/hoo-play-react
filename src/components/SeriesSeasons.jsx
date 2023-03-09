import { Button, Typography, Container, IconButton, Box, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const SeriesSeasons = () => {

    const { seriesSeasons } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <div className="uk-position-relative">
                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${seriesSeasons.poster_path})` }}>
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
            <Container>
                <Typography mb={2} variant="body2" color={"rgba(255, 255, 255, 0.7)"}>
                    {seriesSeasons.overview}
                </Typography>
                <div className="uk-margin-bottom" data-uk-slider>
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex='-1'>
                        <ul className="uk-slider-items uk-child-width-1-1 uk-grid-small" data-uk-grid>
                            {seriesSeasons.episodes.map((episode) => (
                                <li>
                                    <Box>
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
                                                    Season {seriesSeasons.season_number} · Episode {episode.episode_number}
                                                </Typography>
                                                <Typography variant="subtitle2" color={"rgba(255, 255, 255, 0.7)"}>
                                                    {episode.air_date}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" className="season">
                                                    ver episodio
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Box>
                                </li>
                            ))}
                        </ul>
                        <a className="uk-position-top-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a className="uk-position-top-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                    </div>
                </div>
            </Container>
        </>
    )
}


export const loaderSeriesSeasons = async ({ params }) => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}?api_key=e9a6dda420749a57b0f4f34699998c5a&language=es-MX`);

    const seriesSeasons = await res.json();

    return { seriesSeasons }
}