import { Container, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { TopNav } from "../components/TopNav";
import { Link } from "react-router-dom";
import { Star } from "@mui/icons-material";

export const Movies = () => {

    const { movies } = useLoaderData();

    return (
        <>
            <TopNav />
            <Container>
                <ImageList gap={20} cols={3}>
                    {movies.items.map((movie) => (
                        <Link to={`/peliculas/id/${movie.id}`} key={movie.id}>
                            <ImageListItem>
                                <img className="cover" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
                                <ImageListItemBar
                                    title={<div> <Star className="details" /> {movie.vote_average} </div>}
                                />
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Container>
        </>
    )
}

export const loaderMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/list/8243388?api_key=e9a6dda420749a57b0f4f34699998c5a&language=en-US`);

    const movies = await res.json();

    return { movies }
}