import { useNavigate } from "react-router-dom"
import Typography from '@mui/material/Typography'
import '../../styles/slider.css';
import Button from '@mui/material/Button'
import VisibilityIcon from '@mui/icons-material/Visibility';

export const SliderPrincipal = () => {

    const navigate = useNavigate();

    const homeMovies = [
        {
            title: 'Tetris',
            id: '726759',
        },
        {
            title: 'Creed: III',
            id: '677179',
        },
        {
            title: 'Misterio a la vista',
            id: '638974',
        },
        {
            title: 'Llaman a la puerta',
            id: '631842',
        },
        {
            title: 'Desconectada... (Missing)',
            id: '768362',
        }
    ]

    return (
        <>
            <div data-uk-slider="center: true">
                <ul className="uk-slider-items uk-grid-small" data-uk-grid>
                    {homeMovies.map((movie) => (
                        <li className="uk-width-3-4" key={movie.id}>
                            <div className="uk-inline">
                                <img className="cover" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Fslider%2F${movie.id}.jpg?alt=media&token=4a487a31-92b4-4a20-89c6-57a63694e035`} alt={movie.title} />
                                <div className="uk-position-top-left banner">
                                    <img className="logo-slide" src={`https://ik.imagekit.io/hooplay/o/hoo-play%2Fimagenes%2Flogos%2F${movie.id}.webp?alt=media&token=4a487a31-92b4-4a20-89c6-57a63694e035`} alt={movie.title} />
                                </div>
                                <div className="uk-position-bottom-left btn-slider">
                                    <Button variant="contained" color="primary" onClick={() => navigate(`/peliculas/id/${movie.id}`)} startIcon={<VisibilityIcon color="#01EB78" />}>
                                        VER AHORA
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}