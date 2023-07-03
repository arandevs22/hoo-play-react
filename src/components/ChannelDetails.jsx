import { Button, Typography, Container, IconButton, Box } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoTop from "./Gotop";


export const ChannelDetails = () => {

    const { channel } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <div className="uk-position-relative">
                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle " style={{ backgroundImage: `url(https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fcanales%2Fbackground%2F${channel.img}.jpg?alt=media&token=8e656e30-8f35-4b8d-aee7-adace3393b9f)` }}>
                </div>
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-position-top-right uk-margin-top uk-margin-right">
                    <img className="channelLogo uk-border-circle" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fcanales%2Flogos%2F${channel.img}.jpg?alt=media&token=8e656e30-8f35-4b8d-aee7-adace3393b9f`} alt={channel.title} />
                </div>
                <div className="uk-position-top-left uk-margin-left uk-margin-top">
                    <IconButton
                        onClick={backButton}
                    >
                        <ArrowBackIcon className="backBtn" />
                    </IconButton>
                </div>
                <div className="uk-position-bottom-left uk-margin-left">
                    <Typography mb={1} variant="h5" color={'#fff'}>
                        {channel.title}
                    </Typography>
                </div>
            </div>
            <Container className="uk-margin-bottom" >
                <Typography mb={2} >
                    <Link className="uk-link-reset" to={`/canales/genre/${channel.genre}`}>
                        <Button className="detailsBtn uk-margin-small-right" variant="outlined">
                            {channel.genre}
                        </Button>
                    </Link>
                </Typography>
                <Box mb={2}>
                    <Button fullWidth={true} href={channel.reference} variant="contained" startIcon={<PlayCircleOutlineIcon />}>
                        reproducir canal
                    </Button>
                </Box>
                <Typography variant="body2" color={"gray"}>
                    {channel.sinopsis}
                </Typography>
            </Container>
            <GoTop />
        </>
    )
}


export const loaderChannelDetails = async ({ params }) => {
    const res = await fetch(`https://befitting-jail-production.up.railway.app/api/channels/id/${params.id}`);

    const channel = await res.json();

    return { channel }
}