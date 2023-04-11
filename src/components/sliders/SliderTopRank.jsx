import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/slider.css';
import { Container, Typography } from '@mui/material'
import { movies } from "../../api";

export const SliderTopRank = () => {


    const movies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/list/8243388?api_key=e9a6dda420749a57b0f4f34699998c5a&language=en-US`);

        return await res.json();

    }

    return (
        <>
            <Container>
                <Typography variant="h6" color={"#fff"}>
                    Canales Deportivos
                </Typography>
            </Container>
            <div data-uk-slider>
                <ul className='uk-slider-items uk-child-width-1-4 uk-grid-small slide-cover' data-uk-grid>
                    {movies.map((channel) => (
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