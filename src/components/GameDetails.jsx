import { Box, Button, Typography, Container, IconButton } from "@mui/material";
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
                <div className="uk-position-top-left">
                    <IconButton

                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                </div>
                <div className="uk-position-bottom-left uk-margin-left">
                    <Typography className="subtitle" variant="body1" color={"#01EB78"}>
                        {game.genre} · {game.year}
                    </Typography>
                    <Typography variant="h6" color={'#fff'}>
                        {game.title}
                    </Typography>
                </div>
            </div>
            <Container >
                <Button fullWidth={true} href={game.reference} variant="contained" startIcon={<VideogameAssetIcon />}>Jugar Ahora</Button>
            </Container>
        </>
    )
}


export const loaderGameDetails = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/id/${params.id}`);

    const game = await res.json();

    return { game }
}