import { Container, Typography } from '@mui/material'
import { Link, useLoaderData } from 'react-router-dom'
import '../uikit/uikit.js'

export const SliderSports = () => {

    const { sliderSports } = useLoaderData();

    return (
        <>
            <Container>
                <Typography className='uk-margin-small-bottom' variant="h6" color={"#FFF"}>
                    Canales Deportes
                </Typography>
            </Container>
            <div data-uk-slider>
                <ul className='uk-slider-items uk-child-width-1-3 uk-grid-small slide-cover' data-uk-grid>
                    {sliderSports.map((channel) => (
                        <Link to={`/canales/id/${channel.id}`} key={channel.id}>
                            <li>
                                <img className="cover" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fcanales%2Flogos%2F${channel.img}.jpg?alt=media&token=c1c23d46-cac3-4d48-8390-10a5f9ddfa65`} alt={channel.title} />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export const loaderSliderSports = async () => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/channels/genre/deportes`);
    const sliderSports = await res.json();

    return { sliderSports }
}