import { Button, Typography, Container, IconButton } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const ChannelDetails = () => {

    const { channel } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <div className="uk-position-relative uk-margin-bottom">
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
                        <ArrowBackIosIcon />
                    </IconButton>
                </div>
                <div className="uk-position-bottom-left uk-margin-left">
                    <Typography mb={2} >
                        <Link className="uk-link-reset" to={`/canales/genre/${channel.genre}`}>
                            <Button className="detailsBtn uk-margin-small-right" variant="outlined">
                                {channel.genre}
                            </Button>
                        </Link>
                    </Typography>
                    <Typography variant="h6" color={'#fff'}>
                        {channel.title}
                    </Typography>
                </div>
            </div>
            <Container className="uk-margin-bottom" >
                <Button fullWidth={true} href={channel.reference} variant="contained" startIcon={<PlayCircleOutlineIcon />}>
                    reproducir canal
                </Button>
                <hr color={"#232323"} />
                <Typography className="uk-margin-small-bottom" variant="body1">
                    Información
                </Typography>
                <Typography variant="body2" color={"gray"}>
                    {channel.sinopsis}
                </Typography>
            </Container>
        </>
    )
}


export const loaderChannelDetails = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/channels/id/${params.id}`);

    const channel = await res.json();

    return { channel }
}