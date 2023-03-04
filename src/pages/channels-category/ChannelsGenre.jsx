import { Container, ImageList, ImageListItem, Typography, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { TopNav } from "../../components/TopNav";

export const ChannelsGenre = () => {

    const { channelsGenre } = useLoaderData();

    return (
        <>
            <TopNav />
            <Container>
                <Typography className="genreTitle" variant="h6">
                    Canales {channelsGenre[0].genre}
                </Typography>
                <ImageList gap={10} cols={3}>
                    {channelsGenre.map((channel) => (
                        <Link to={`/canales/id/${channel.id}`} key={channel.logo}>
                            <ImageListItem>
                                <img className="cover" src={channel.logo} alt={channel.title} />
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Container>
        </>
    )
}

export const loaderChannelGenre = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/channels/genre/${params.genre}`);

    const channelsGenre = await res.json();

    return { channelsGenre }
}