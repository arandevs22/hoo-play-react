import { Star } from "@mui/icons-material";
import { Container, createTheme, Grid, Paper, styled, ThemeProvider, Typography, AppBar, Toolbar, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { TopNav } from "../components/TopNav";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body3,
    textAlign: 'left',
    padding: '10px'
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })

export const Games = () => {

    const { games } = useLoaderData();

    return (
        <>
            <TopNav />
            <Container >
                <Grid mb={5} container spacing={1}>
                    <ThemeProvider theme={darkTheme}>
                        {games.map((game) => (
                            <Grid item xs={4} key={game.id}>
                                <Item elevation={3}>
                                    <Link to={`/juegos/id/${game.id}`}>
                                        <img className="cover" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fjuegos%2Fposter%2F${game.id}.jpg?alt=media&token=c1c23d46-cac3-4d48-8390-10a5f9ddfa65`} />
                                    </Link>
                                    <Typography mt={1} className="title-movie">
                                        {game.title}
                                    </Typography>
                                </Item>
                            </Grid>
                        ))}

                    </ThemeProvider>
                </Grid>
            </Container>
        </>
    )
}

export const loaderGames = async () => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance`);

    const games = await res.json();

    return { games }
}