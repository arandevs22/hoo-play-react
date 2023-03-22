import { Container, Typography, Paper, styled, Grid, ThemeProvider, createTheme, AppBar, Toolbar } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { TopNav } from "../components/TopNav";
import { Link } from "react-router-dom";
import GoTop from "../components/Gotop";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    padding: '10px'
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } });


export const Channels = () => {

    const { channels } = useLoaderData();

    return (
        <>
            <TopNav />
            <Container>
                <Grid mb={5} container spacing={1} >
                    <ThemeProvider theme={darkTheme}>
                        {channels.map((channel) => (
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
            <GoTop />
        </>
    )
}


export const loaderChannels = async () => {
    const res = await fetch(`https://retro-game.onrender.com/api/channels`);

    const channels = await res.json();

    return { channels }
}