import { Button, Typography, Container, IconButton } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import GoTop from "./Gotop";
import { ArrowBack } from "@mui/icons-material";


export const GameDetails = () => {

    const { game } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <div className="uk-position-relative uk-margin-bottom">
                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle " style={{ backgroundImage: `url(https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fjuegos%2Fbackground%2F${game.id}.jpg?alt=media&token=c1c23d46-cac3-4d48-8390-10a5f9ddfa65)` }}>
                </div>
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-position-top-right uk-margin-top uk-margin-right">
                    <img className="gameLogo" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fjuegos%2Flogo%2F${game.id}.png?alt=media&token=c1c23d46-cac3-4d48-8390-10a5f9ddfa65`} alt={game.title} />
                </div>
                <div className="uk-position-top-left uk-margin-left uk-margin-top">
                    <IconButton
                        onClick={backButton}
                    >
                        <ArrowBack className="backBtn" />
                    </IconButton>
                </div>
                <div className="uk-position-bottom-left uk-margin-left">
                    <Typography mb={2} >
                        <Link className="uk-link-reset" to={`/juegos/genre/${game.genre}`}>
                            <Button className="detailsBtn uk-margin-small-right" variant="outlined">
                                {game.genre}
                            </Button>
                        </Link>
                        <Link className="uk-link-reset" to={`/juegos/year/${game.year}`}>
                            <Button className="detailsBtn uk-margin-small-right" variant="outlined">
                                {game.year}
                            </Button>
                        </Link>
                    </Typography>
                    <Typography variant="h6" color={'#fff'}>
                        {game.title}
                    </Typography>
                </div>
            </div>
            <Container className="uk-margin-bottom" >
                <Button fullWidth={true} href={game.reference} variant="contained" startIcon={<VideogameAssetIcon />}>
                    Jugar Ahora
                </Button>
                <hr color={"#232323"} />
                <Typography className="uk-margin-small-bottom" variant="body1">
                    Sinopsis
                </Typography>
                <Typography variant="body2" color={"gray"}>
                    {game.sinopsis}
                </Typography>
            </Container>
            <GoTop />
        </>
    )
}


export const loaderGameDetails = async ({ params }) => {
    const res = await fetch(`https://befitting-jail-production.up.railway.app/api/games/game-boy-advance/id/${params.id}`);

    const game = await res.json();

    return { game }
}