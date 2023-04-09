import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/slider.css';
import { Container, Typography } from '@mui/material'

export const SliderInfantiles = () => {

    const [infantiles, setInfantiles] = useState([])

    useEffect(() => {
        fetch('https://retro-game.onrender.com/api/channels/genre/infantiles')
            .then((response) => {
                return response.json()
            })
            .then((infantiles) => {
                setInfantiles(infantiles)
            })
    }, [])

    return (
        <>
            <Container>
                <Typography variant="h6" color={"#fff"}>
                    Canales Infantiles
                </Typography>
            </Container>
            <div data-uk-slider>
                <ul className='uk-slider-items uk-child-width-1-4 uk-grid-small slide-cover' data-uk-grid>
                    {infantiles.map((channel) => (
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