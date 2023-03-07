import { Container, createTheme, Paper, styled, Typography, Grid, ThemeProvider, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    padding: '10px'
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const ChannelsGenre = () => {

    const { channelsGenre } = useLoaderData();

    return (
        <>
            <Container className="uk-margin-top">
                <Typography mb={2} className="genreTitle" variant="h6">
                    Canales {channelsGenre[0].genre}
                </Typography>
                <Grid mb={5} container spacing={1} >
                    <ThemeProvider theme={darkTheme}>
                        {channelsGenre.map((channel) => (
                            <Grid item xs={4} key={channel.id}>
                                <Item elevation={3}>
                                    <Link to={`/canales/id/${channel.id}`}>
                                        <img className="cover" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fcanales%2Flogos%2F${channel.img}.jpg?alt=media&token=c1c23d46-cac3-4d48-8390-10a5f9ddfa65`} />
                                    </Link>
                                    <Typography mt={1} className="title-movie">
                                        {channel.title}
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

export const loaderChannelGenre = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/channels/genre/${params.genre}`);

    const channelsGenre = await res.json();

    return { channelsGenre }
}