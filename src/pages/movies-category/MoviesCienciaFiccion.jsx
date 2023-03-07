import { Star } from "@mui/icons-material";
import { Container, createTheme, Grid, Paper, styled, ThemeProvider, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    padding: '10px'
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })

export const MoviesCienciaFiccion = () => {

    const { moviesCienciaFiccion } = useLoaderData();

    const cienciaFiccion = moviesCienciaFiccion.items.filter(movie => {
        return movie.genre_ids.includes(878)
    })

    return (
        <>
            <Container className="uk-margin-top">
                <Typography mb={2} color="#fff" variant="h6">
                    Peliculas de Ciencia Ficcion
                </Typography>
                <Grid mb={5} container spacing={1}>
                    <ThemeProvider theme={darkTheme}>
                        {cienciaFiccion.map((movie) => (
                            <Grid item xs={4} key={movie.id}>
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

export const loaderMoviesCienciaFiccion = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/list/8243388?api_key=e9a6dda420749a57b0f4f34699998c5a&language=en-US`);

    const moviesCienciaFiccion = await res.json();

    return { moviesCienciaFiccion }
}