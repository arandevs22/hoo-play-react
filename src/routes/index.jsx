import { createBrowserRouter } from "react-router-dom";
import { GameDetails, loaderGameDetails } from "../components/GameDetails";
import LayOutPublic from "../layout/LayOutPublic";
import { Home } from "../pages/Home";
import { Games, loaderGames } from "../pages/Games.jsx";
import { loaderMovies, Movies } from "../pages/Movies.jsx";
import { loaderSeries, Series } from "../pages/Series";
import { JuegosGenre, loaderGameGenre } from "../pages/games-category/GamesGenre.jsx";
import { GameYears, loaderGameYear } from "../pages/games-category/GamesYear.jsx";
import { ChannelDetails, loaderChannelDetails } from "../components/ChannelDetails.jsx";
import { Channels, loaderChannels } from "../pages/Channels";
import { ChannelsGenre, loaderChannelGenre } from "../pages/channels-category/ChannelsGenre";
import { loaderMovieDetails, MovieDetails } from "../components/MovieDetails";
import { loaderSerieDetails, SerieDetails } from "../components/SeriesDetails";
import { loaderMoviesTerror, MoviesTerror } from "../pages/movies-category/MoviesTerror";
import { loaderMoviesAccion, MoviesAccion } from "../pages/movies-category/MoviesAccion";
import { loaderMoviesAventura, MoviesAventura } from "../pages/movies-category/MoviesAventura";
import { loaderMoviesAnimacion, MoviesAnimacion } from "../pages/movies-category/MoviesAnimacion";
import { loaderMoviesComedia, MoviesComedia } from "../pages/movies-category/MoviesComedia";
import { loaderMoviesCrimen, MoviesCrimen } from "../pages/movies-category/MoviesCrimen";
import { loaderMoviesDocumental, MoviesDocumental } from "../pages/movies-category/MoviesDocumental";
import { loaderMoviesDrama, MoviesDrama } from "../pages/movies-category/MoviesDrama";
import { loaderMoviesFamilia, MoviesFamilia } from "../pages/movies-category/MoviesFamilia";
import { loaderMoviesFantasia, MoviesFantasia } from "../pages/movies-category/MoviesFantasia";
import { loaderMoviesHistoria, MoviesHistoria } from "../pages/movies-category/MoviesHistoria";
import { loaderMoviesMusica, MoviesMusica } from "../pages/movies-category/MoviesMusica";
import { loaderMoviesMisterio, MoviesMisterio } from "../pages/movies-category/MoviesMisterio";
import { loaderMoviesRomance, MoviesRomance } from "../pages/movies-category/MoviesRomance";
import { loaderMoviesCienciaFiccion, MoviesCienciaFiccion } from "../pages/movies-category/MoviesCienciaFiccion";
import { loaderMoviesPeliculaDeTv, MoviesPeliculaDeTv } from "../pages/movies-category/MoviesPeliculaDeTv";
import { loaderMoviesSuspense, MoviesSuspense } from "../pages/movies-category/MoviesSuspense";
import { loaderMoviesBelica, MoviesBelica } from "../pages/movies-category/MoviesBelica";
import { loaderMoviesWestern, MoviesWestern } from "../pages/movies-category/MoviesWestern";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOutPublic />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/canales',
                element: <Channels />,
                loader: loaderChannels
            },
            {
                path: '/canales/id/:id',
                element: <ChannelDetails />,
                loader: loaderChannelDetails
            },
            {
                path: '/canales/genre/:genre',
                element: <ChannelsGenre />,
                loader: loaderChannelGenre
            },
            {
                path: '/peliculas',
                element: <Movies />,
                loader: loaderMovies
            },
            {
                path: '/peliculas/id/:id',
                element: <MovieDetails />,
                loader: loaderMovieDetails
            },
            {
                path: '/peliculas/genre/27',
                element: <MoviesTerror />,
                loader: loaderMoviesTerror
            },
            {
                path: '/peliculas/genre/28',
                element: <MoviesAccion />,
                loader: loaderMoviesAccion
            },
            {
                path: '/peliculas/genre/12',
                element: <MoviesAventura />,
                loader: loaderMoviesAventura
            },
            {
                path: '/peliculas/genre/16',
                element: <MoviesAnimacion />,
                loader: loaderMoviesAnimacion
            },
            {
                path: '/peliculas/genre/35',
                element: <MoviesComedia />,
                loader: loaderMoviesComedia
            },
            {
                path: '/peliculas/genre/80',
                element: <MoviesCrimen />,
                loader: loaderMoviesCrimen
            },
            {
                path: '/peliculas/genre/99',
                element: <MoviesDocumental />,
                loader: loaderMoviesDocumental
            },
            {
                path: '/peliculas/genre/18',
                element: <MoviesDrama />,
                loader: loaderMoviesDrama
            },
            {
                path: '/peliculas/genre/10751',
                element: <MoviesFamilia />,
                loader: loaderMoviesFamilia
            },
            {
                path: '/peliculas/genre/14',
                element: <MoviesFantasia />,
                loader: loaderMoviesFantasia
            },
            {
                path: '/peliculas/genre/36',
                element: <MoviesHistoria />,
                loader: loaderMoviesHistoria
            },
            {
                path: '/peliculas/genre/10402',
                element: <MoviesMusica />,
                loader: loaderMoviesMusica
            },
            {
                path: '/peliculas/genre/9648',
                element: <MoviesMisterio />,
                loader: loaderMoviesMisterio
            },
            {
                path: '/peliculas/genre/10749',
                element: <MoviesRomance />,
                loader: loaderMoviesRomance
            },
            {
                path: '/peliculas/genre/878',
                element: <MoviesCienciaFiccion />,
                loader: loaderMoviesCienciaFiccion
            },
            {
                path: '/peliculas/genre/10770',
                element: <MoviesPeliculaDeTv />,
                loader: loaderMoviesPeliculaDeTv
            },
            {
                path: '/peliculas/genre/53',
                element: <MoviesSuspense />,
                loader: loaderMoviesSuspense
            },
            {
                path: '/peliculas/genre/10752',
                element: <MoviesBelica />,
                loader: loaderMoviesBelica
            },
            {
                path: '/peliculas/genre/37',
                element: <MoviesWestern />,
                loader: loaderMoviesWestern
            },
            {
                path: '/series',
                element: <Series />,
                loader: loaderSeries
            },
            {
                path: 'series/id/:id',
                element: <SerieDetails />,
                loader: loaderSerieDetails
            },
            {
                path: '/juegos/',
                element: <Games />,
                loader: loaderGames,
            },
            {
                path: '/juegos/id/:id',
                element: <GameDetails />,
                loader: loaderGameDetails
            },
            {
                path: '/juegos/genre/:genre',
                element: <JuegosGenre />,
                loader: loaderGameGenre
            },
            {
                path: '/juegos/year/:year',
                element: <GameYears />,
                loader: loaderGameYear
            },

        ]
    }
])