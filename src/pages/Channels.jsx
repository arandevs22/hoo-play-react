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

export const loaderChannels = async () => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/channels/`);

    const channels = await res.json();

    return { channels }
}