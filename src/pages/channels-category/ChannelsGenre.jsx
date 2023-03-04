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
                        <Link to={`/canales/id/${channel.id}`} key={channel.img}>
                            <ImageListItem>
                                <img className="cover" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fcanales%2Flogos%2F${channel.img}.jpg?alt=media&token=c1c23d46-cac3-4d48-8390-10a5f9ddfa65`} alt={channel.title} />
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