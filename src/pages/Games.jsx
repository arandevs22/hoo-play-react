import { Star } from "@mui/icons-material";
import { Container, createTheme, Grid, Paper, styled, ThemeProvider, Typography, AppBar, Toolbar, Box, Button, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import GoTop from "../components/Gotop";
import { TopNav } from "../components/TopNav";
import { useState } from "react";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body3,
    textAlign: 'left',
    padding: '10px'
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })

export const Games = () => {

    const { games } = useLoaderData();

    const [visible, setVisible] = useState(20);

    const loadMore = () => {
        setVisible(visible + 20)
    }

    return (
        <>
            <TopNav />
            <Container >
                <Grid mb={3} container spacing={1}>
                    <ThemeProvider theme={darkTheme}>
                        {games.slice(0, visible).map((game) => (
                            <Grid item xs={6} key={game.id}>
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
                <Box mb={3}>
                    {visible < games.length && (
                        <Button variant="contained" className="loaderBtn" fullWidth={true} onClick={loadMore} >Mostrar Más</Button>
                    )}
                </Box>
            </Container>
            <GoTop />
        </>
    )
}

export const loaderGames = async () => {
    const res = await fetch(`https://api-retro-game-b8cce30f0948.herokuapp.com/api/games/game-boy-advance`);

    const games = await res.json();

    return { games }
}