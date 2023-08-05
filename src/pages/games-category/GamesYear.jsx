import { ArrowBack } from "@mui/icons-material";
import { AppBar, Container, IconButton, ImageList, ImageListItem, styled, Toolbar, Typography, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";

export const GameYears = () => {

    const { gamesYear } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    const OffSet = styled('div')(({ theme }) => theme.mixins.toolbar)

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        onClick={backButton}
                        sx={{ mr: 3 }}
                    >
                        <ArrowBack />
                    </IconButton>
                    <Typography className="genreTitle" variant="h6">
                        {gamesYear[0].year} Games
                    </Typography>
                </Toolbar>
            </AppBar>
            <OffSet />
            <Container>
                <ImageList gap={10} cols={2}>
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
    const res = await fetch(`https://api-retro-game-b8cce30f0948.herokuapp.com/api/games/game-boy-advance/year/${params.year}`);

    const gamesYear = await res.json();

    return { gamesYear }
}