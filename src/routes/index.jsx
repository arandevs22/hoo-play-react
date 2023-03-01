import { createBrowserRouter } from "react-router-dom";
import { GameDetails, loaderGameDetails } from "../components/GameDetails";
import LayOutPublic from "../layout/LayOutPublic";
import { Home } from "../pages/Home";
import { Juegos, loaderGames } from "../pages/Juegos";
import { LiveTv } from "../pages/LiveTv";
import { Peliculas } from "../pages/Peliculas";
import { Series } from "../pages/Series";

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
                path: '/live-tv',
                element: <LiveTv />
            },
            {
                path: '/peliculas',
                element: <Peliculas />
            },
            {
                path: '/series',
                element: <Series />
            },
            {
                path: '/juegos/',
                element: <Juegos />,
                loader: loaderGames,
            },
            {
                path: '/juegos/id/:id',
                element: <GameDetails />,
                loader: loaderGameDetails
            }

        ]
    }
])