import { Container, ImageList, ImageListItem } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { TopNav } from "../components/TopNav";
import { Link } from "react-router-dom";


export const Channels = () => {

    const { channels } = useLoaderData();

    return (
        <>
            <TopNav />
            <Container>
                <ImageList gap={10} cols={3}>
                    {channels.map((channel) => (
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

export const loaderChannels = async () => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/channels/`);

    const channels = await res.json();

    return { channels }
}