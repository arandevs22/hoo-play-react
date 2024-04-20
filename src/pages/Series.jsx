import { Star } from "@mui/icons-material";
import { Box, Button, Container, createTheme, Grid, Paper, styled, ThemeProvider, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import '../styles/movies.css';
import '../styles/details.css'
import { TopNav } from "../components/TopNav";
import GoTop from "../components/Gotop";
import { useState } from "react";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    padding: '10px'
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })

export const Series = () => {

    const { series } = useLoaderData();

    const [visible, setVisible] = useState(20);

    const loadMore = () => {
        setVisible(visible + 20)
    }

    return (
        <>
            <TopNav />
            <Container>
                <Grid mb={3} container spacing={1}>
                    <ThemeProvider theme={darkTheme}>
                        {series.items.slice(0, visible).map((serie) => (
                            <Grid item xs={6} key={serie.id}>
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
                <Box mb={3}>
                    {visible < series.items.length && (
                        <Button variant="contained" className="loaderBtn" fullWidth={true} onClick={loadMore}>Mostrar Más</Button>
                    )}
                </Box>
            </Container>
            <GoTop />
        </>
    )
}

export const loaderSeries = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/list/8295732?api_key=dd4a4feaa11b7f7a239aa3310342f14f&language=en-US`);

    const series = await res.json();

    return { series }
}