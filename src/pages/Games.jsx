import { Container, ImageList, ImageListItem, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { TopNav } from "../components/TopNav";

export const Games = () => {

    const { games } = useLoaderData();

    return (
        <>
            <TopNav />
            <Container>
                <ImageList gap={10} cols={3}>
                    {games.map((game) => (
                        <Link to={`/juegos/id/${game.id}`} key={game.id}>
                            <ImageListItem>
                                <img className="cover" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fjuegos%2Fposter%2F${game.id}.jpg?alt=media&token=c1c23d46-cac3-4d48-8390-10a5f9ddfa65`} alt={game.title} />
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