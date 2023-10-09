import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/slider.css';
import { Box, Container, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

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
            <Box margin={2}>
                <Typography variant="h6" color={"#fff"}>
                    Peliculas de Terror
                </Typography>
            </Box>
            <Swiper
               spaceBetween={20}
               slidesPerView={3.3}
            >
                {terrorMovies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <img className="cover" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}