import { createBrowserRouter } from "react-router-dom";
import { GameDetails, loaderGameDetails } from "../components/GameDetails";
import LayOutPublic from "../layout/LayOutPublic";
import { Home } from "../pages/Home";
import { Games, loaderGames } from "../pages/Games.jsx";
import { loaderMovies, Movies } from "../pages/Movies.jsx";
import { Series } from "../pages/Series";
import { JuegosGenre, loaderGameGenre } from "../pages/games-category/GamesGenre.jsx";
import { GameYears, loaderGameYear } from "../pages/games-category/GamesYear.jsx";
import { ChannelDetails, loaderChannelDetails } from "../components/ChannelDetails.jsx";
import { Channels, loaderChannels } from "../pages/Channels";
import { ChannelsGenre, loaderChannelGenre } from "../pages/channels-category/ChannelsGenre";
import { loaderMovieDetails, MovieDetails } from "../components/MovieDetails";



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
                path: '/series',
                element: <Series />
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