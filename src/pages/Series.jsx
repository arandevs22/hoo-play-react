import { Star } from "@mui/icons-material";
import { Container, createTheme, Grid, Paper, styled, ThemeProvider, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import '../styles/movies.css';
import '../styles/details.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    padding: '10px'
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })

export const Series = () => {

    const { series } = useLoaderData();

    return (
        <>
            <Container>
                <Grid mb={5} container spacing={1}>
                    <ThemeProvider theme={darkTheme}>
                        {series.items.map((serie) => (
                            <Grid item xs={4} key={serie.id}>
                                <Item elevation={3}>
                                    <Link to={`/series/id/${serie.id}`}>
                                        <img className="cover" src={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`} />
                                    </Link>
                                    <Typography mt={1} className="title-movie">
                                        {serie.name}
                                    </Typography>
                                    <Typography mt={0.5} className="overage">
                                        <Star className="details" /> {serie.vote_average}
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

export const loaderSeries = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/list/8243511?api_key=e9a6dda420749a57b0f4f34699998c5a&language=en-US`);

    const series = await res.json();

    return { series }
}