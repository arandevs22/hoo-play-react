import { createBrowserRouter } from "react-router-dom";
import { GameDetails, loaderGameDetails } from "../components/GameDetails";
import LayOutPublic from "../layout/LayOutPublic";
import { Home } from "../pages/Home";
import { Games, loaderGames } from "../pages/Games.jsx";
import {LiveTv, loaderChannels} from "../pages/LiveTv";
import { Movies } from "../pages/Movies.jsx";
import { Series } from "../pages/Series";
import {JuegosGenre, loaderGameGenre} from "../pages/games-category/GamesGenre.jsx";
import {GameYears, loaderGameYear} from "../pages/games-category/GamesYear.jsx";
import {ChannelDetails, loaderChannelDetails} from "../components/ChannelDetails.jsx";


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
                element: <LiveTv />,
                loader: loaderChannels
            },
            {
              path: '/canales/id/:id',
              element: <ChannelDetails />,
              loader: loaderChannelDetails
            },
            {
                path: '/peliculas',
                element: <Movies />
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