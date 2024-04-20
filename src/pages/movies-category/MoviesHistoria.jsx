import { Star, ArrowBack } from "@mui/icons-material";
import { AppBar, Container, createTheme, Grid, IconButton, Paper, styled, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    padding: '10px'
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })

const backButton = () => {
    history.back();
}

const OffSet = styled('div')(({ theme }) => theme.mixins.toolbar)

export const MoviesHistoria = () => {

    const { moviesHistoria } = useLoaderData();

    const historia = moviesHistoria.items.filter(movie => {
        return movie.genre_ids.includes(36)
    })

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
                        Peliculas de Historia
                    </Typography>
                </Toolbar>
            </AppBar>
            <OffSet />
            <Container>
                <Grid mb={5} container spacing={1}>
                    <ThemeProvider theme={darkTheme}>
                        {historia.map((movie) => (
                            <Grid item xs={6} key={movie.id}>
                                <Item elevation={3}>
                                    <Link to={`/peliculas/id/${movie.id}`}>
                                        <img className="cover" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                                    </Link>
                                    <Typography mt={1} className="title-movie">
                                        {movie.title}
                                    </Typography>

                                    <Typography mt={0.5} className="overage">
                                        {movie.release_date}
                                    </Typography>
                                    <Typography mt={0.5} className="overage">
                                        <Star className="details" /> {movie.vote_average}
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

export const loaderMoviesHistoria = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/list/8295721?api_key=dd4a4feaa11b7f7a239aa3310342f14f&language=en-US`);

    const moviesHistoria = await res.json();

    return { moviesHistoria }
}