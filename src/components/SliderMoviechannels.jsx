import { Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../uikit/uikit.js'

export const SliderMovieChannels = () => {

    const [movieChannels, setMovieChannels] = useState([])

    useEffect(() => {
        fetch('https://apiretrogame-production.up.railway.app/api/channels/genre/peliculas')
            .then((response) => {
                return response.json()
            })
            .then((movieChannels) => {
                setMovieChannels(movieChannels)
            })
    }, [])


    return (
        <>
            <Container>
                <Typography className='uk-margin-small-bottom' variant='subtitle1' color={"#FFF"}>
                    Canales Peliculas
                </Typography>
            </Container>
            <div data-uk-slider>
                <ul className='uk-slider-items uk-child-width-1-3 uk-grid-small slide-cover' data-uk-grid>
                    {movieChannels.map((channel) => (
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
