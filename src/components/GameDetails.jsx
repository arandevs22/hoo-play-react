import { Button, Typography, Container, IconButton } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const GameDetails = () => {

    const { game } = useLoaderData();

    return (
        <>
            <div className="uk-position-relative uk-margin-bottom">
                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle " style={{ backgroundImage: `url(${game.background})` }}>
                </div>
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="gameLogo" src={game.logo} alt={game.title} />
                </div>
                <div className="uk-position-top-left uk-margin-small-left uk-margin-small-top">
                    <IconButton
                    >
                        <ArrowBackIosIcon  />
                    </IconButton>
                </div>
                <div className="uk-position-bottom-left uk-margin-left">
                    <Typography className="subtitle" variant="body2" color={"#01EB78"}>
                        {game.genre} · {game.year} · {game.console}
                    </Typography>
                    <Typography variant="h5" color={'#fff'}>
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
        </>
    )
}


export const loaderGameDetails = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/id/${params.id}`);

    const game = await res.json();

    return { game }
}