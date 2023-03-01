import { Box, Button, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';


export const GameDetails = () => {

    const { game } = useLoaderData();

    return (
        <>
            <div className="uk-position-relative">
                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle " style={{ backgroundImage: `url(${game.background})` }}>
                </div>
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="gameLogo" src={game.logo} alt={game.title} />
                </div>
                <div className="uk-position-bottom-left">
                    <Typography className="uk-margin-left" variant="h6" color={'#fff'}>
                        {game.title}
                    </Typography>
                </div>
            </div>
            <div>
                <Button fullWidth={true} href={game.reference} variant="contained" startIcon={<VideogameAssetIcon />}>Jugar Ahora</Button>
            </div>
        </>
    )
}


export const loaderGameDetails = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/id/${params.id}`);

    const game = await res.json();

    return { game }
}