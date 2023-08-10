import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/slider.css';
import { Container, Typography } from '@mui/material'

export const SliderTerror = () => {

    const terrorMovies = [
        {
            title: 'Mi maestra se comio a mi amigo',
            id: '1105283',
            poster_path: '/5MiVG39r82aYUAtvs3bTycmbewJ.jpg',
        },
        {
            title: 'The Strays',
            id: '1063422',
            poster_path: '/3OKBFYRVSKkBVJ7WpKogTVQfUqC.jpg',
        },
        {
            title: 'Huesera: The Bone Woman',
            id: '772515',
            poster_path: '/zgpj76z9byUgcWnxLDmtZ3XqfvN.jpg',
        },
        {
            title: 'Knock at the Cabin',
            id: '631842',
            poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
        },
        {
            title: 'The Mummy Resurrection',
            id: '984105',
            poster_path: '/d0pt6KlVvmtG0uhccWjgWfIqJee.jpg',
        },
        {
            title: 'M3GAN',
            id: '536554',
            poster_path: '/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg',
        },
        {
            title: 'Venus',
            id: '931954',
            poster_path: '/vyQmDx5CF8x9T6WKCLuoFotGpjf.jpg'
        },
        {
            title: 'MexZombies',
            id: '675054',
            poster_path: '/pTxw4GFE3ZfzJfvuUsPyD5njAuI.jpg'
        },
        {
            title: 'Re/Member',
            id: '991814',
            poster_path: '/cCTmZ93aBZ1FwHntiDpa2Lj92zs.jpg'
        }
    ]

    return (
        <>
            <Container>
                <Typography variant="h6" color={"#fff"}>
                    Peliculas de Terror
                </Typography>
            </Container>
            <div data-uk-slider>
                <ul className='uk-slider-items uk-child-width-1-3 uk-grid-small slide-cover' data-uk-grid>
                    {terrorMovies.map((movie) => (
                        <Link to={`/peliculas/id/${movie.id}`} key={movie.id}>
                            <li>
                                <img className="cover" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}