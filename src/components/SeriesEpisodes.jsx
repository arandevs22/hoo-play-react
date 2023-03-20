import { Button, Typography, Container, IconButton, Stack, Divider, Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoTop from "./Gotop";
import ReactPlayer from "react-player";

export const SeriesEpisodes = () => {

    const { episode } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <Box>
                <div className="uk-position-relative uk-margin-bottom">
                    <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${episode.still_path})` }}>
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
                            {episode.name}
                        </Typography>
                        <Typography variant="subtitle1" color={"rgba(255, 255, 255, 0.7)"}>
                            {episode.air_date}
                        </Typography>
                    </div>
                </div>
            </Box>
            <Container className="uk-margin-bottom" >
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                <Box mb={2}>
                    <Button fullWidth={true} href={`go:${episode.id}`} variant="contained" startIcon={<PlayCircleOutlineIcon />}>
                        reproducir episodio {episode.episode_number}
                    </Button>
                </Box>
                <Typography variant="body2" color={"gray"}>
                    {episode.overview}
                </Typography>
            </Container>
            <GoTop />
        </>
    )
}


export const loaderSeriesEpisodes = async ({ params }) => {
    const res = await fetch(`
    https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}/episode/${params.episode_number}?api_key=e9a6dda420749a57b0f4f34699998c5a&language=en-US`);

    const episode = await res.json();

    return { episode }
}