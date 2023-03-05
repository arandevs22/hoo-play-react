import { Container, ImageList, ImageListItem, Typography, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { TopNav } from "../../components/TopNav";

export const GameYears = () => {

    const { gamesYear } = useLoaderData();

    return (
        <>
            <TopNav />
            <Container>
                <Typography className="genreTitle" variant="h6">
                    {gamesYear[0].year} games
                </Typography>
                <ImageList gap={10} cols={3}>
                    {gamesYear.map((game) => (
                        <Link to={`/juegos/id/${game.id}`} key={game.poster}>
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

export const loaderGameYear = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/year/${params.year}`);

    const gamesYear = await res.json();

    return { gamesYear }
}