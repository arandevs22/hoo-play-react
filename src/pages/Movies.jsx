import { Star } from "@mui/icons-material";
import { Container, createTheme, Grid, Paper, styled, ThemeProvider, Typography, AppBar, Toolbar, Button, Box, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { TopNav } from "../components/TopNav";
import GoTop from "../components/Gotop";
import { useState } from "react";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    padding: '10px'
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })

export const Movies = () => {

    const [visible, setVisible] = useState(10);

    const { movies } = useLoaderData();

    console.log(movies)

    const loadMore = () => {
        setVisible(visible + 20)
    }

    return (
        <>
            <TopNav />
            <Container >
                <Grid mb={3} container spacing={1}>
                    <ThemeProvider theme={darkTheme}>
                        {movies.items.slice(0, visible).map((movie) => (
                            <Grid item xs={6} key={movie.id}>
                                <Item elevation={3}>
                                    <Link to={`/peliculas/id/${movie.id}`}>
                                        <img className="cover" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                                    </Link>
                                    <Typography mt={1} className="title-movie" variant="subtitle1">
                                        {movie.title}
                                    </Typography>
                                    <Typography mt={0.5} className="overage" variant="subtitle2">
                                        {new Date(movie.release_date).getFullYear()}
                                    </Typography>
                                </Item>
                            </Grid>
                        ))}
                    </ThemeProvider>
                </Grid>
                <Box mb={3}>
                    {visible < movies.items.length && (
                        <Button variant="contained" className="loaderBtn" fullWidth={true} onClick={loadMore}>Mostrar más</Button>
                    )}
                </Box>
            </Container>
            <GoTop />
        </>
    )
}

export const loaderMovies = async () => {

    const res1 = await fetch(`https://api.themoviedb.org/3/list/8295721?api_key=dd4a4feaa11b7f7a239aa3310342f14f&language=en-US&page=1`);
    const res2 = await fetch(`https://api.themoviedb.org/3/list/8295721?api_key=dd4a4feaa11b7f7a239aa3310342f14f&language=en-US&page=2`)

    const page1 = await res1.json();
    const page2 = await res2.json();

    const allMovies = page1.items.concat(page2.items)

    return { movies: {items: allMovies} }
}