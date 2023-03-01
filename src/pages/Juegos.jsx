import { Container, ImageList, ImageListItem, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { TopNav } from "../components/TopNav";

export const Juegos = () => {

    const { games } = useLoaderData();

    return (
        <>
            <TopNav />
            <Container>
                <ImageList gap={10} cols={3}>
                    {games.map((game) => (
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

export const loaderGames = async () => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/`);

    const games = await res.json();

    return { games }
}