import {Container, ImageList, ImageListItem, Typography,} from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { TopNav } from "../../components/TopNav";

export const JuegosGenre = () => {

    const { gamesGenre } = useLoaderData();

    return (
        <>
            <TopNav />
            <Container>
                <Typography className="genreTitle" variant="h6">
                    {gamesGenre[0].genre} games
                </Typography>
                <ImageList gap={10} cols={3}>
                    {gamesGenre.map((game) => (
                        <Link to={`/juegos/id/${game.id}`} key={game.poster}>
                            <ImageListItem>
                                <img className="cover" src={game.poster} alt={game.title} />
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Container>
        </>
    )
}

export const loaderGameGenre = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/${params.genre}`);

    const gamesGenre = await res.json();

    return { gamesGenre }
}