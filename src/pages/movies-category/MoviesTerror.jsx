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

export const MoviesTerror = () => {

    const { moviesTerror } = useLoaderData();

    const terror = moviesTerror.items.filter(movie => {
        return movie.genre_ids.includes(27)
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
                        Peliculas de Terror
                    </Typography>
                </Toolbar>
            </AppBar>
            <OffSet />
            <Container>
                <Grid mb={5} container spacing={1}>
                    <ThemeProvider theme={darkTheme}>
                        {terror.map((movie) => (
                            <Grid item xs={6} key={movie.id}>
                                <Item elevation={3}>
                                    <Link to={`/peliculas/id/${movie.id}`}>
                                        <img className="cover" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                                    </Link>
                                    <Typography mt={1} className="title-movie">
                                        {movie.title}
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

export const loaderMoviesTerror = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/list/8243388?api_key=e9a6dda420749a57b0f4f34699998c5a&language=en-US`);

    const moviesTerror = await res.json();

    return { moviesTerror }
}