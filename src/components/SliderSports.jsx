import { Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../uikit/uikit.js'

export const SliderSports = () => {

    const [deportes, setDeportes] = useState([])

    useEffect(() => {
        fetch('https://apiretrogame-production.up.railway.app/api/channels/genre/deportes')
            .then((response) => {
                return response.json()
            })
            .then((deportes) => {
                setDeportes(deportes)
            })
    }, [])


    return (
        <>
            <div className='uk-margin-bottom'>
                <Container>
                    <Typography className='uk-margin-small-bottom' variant="subtitle1" color={"#FFF"}>
                        Canales Deportes
                    </Typography>
                </Container>
                <div data-uk-slider>
                    <ul className='uk-slider-items uk-child-width-1-4 uk-grid-small slide-cover' data-uk-grid>
                        {deportes.map((channel) => (
                            <Link to={`/canales/id/${channel.id}`} key={channel.id}>
                                <li>
                                    <img className="cover" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fcanales%2Flogos%2F${channel.img}.jpg?alt=media&token=c1c23d46-cac3-4d48-8390-10a5f9ddfa65`} alt={channel.title} />
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}