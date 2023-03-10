import React from "react";
import '../styles/bottomNav.css'
import { BottomNavigation, BottomNavigationAction, Paper, styled } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useNavigate } from "react-router-dom";


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const BottomNav = () => {

    const [value, setValue] = React.useState(0);

    const navigate = useNavigate();

    return (
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label="Inicio"
                        icon={<HomeIcon />}
                        onClick={() => navigate('/')}
                    />
                    <BottomNavigationAction
                        label="Canales"
                        icon={<LiveTvIcon />}
                        onClick={() => navigate('/canales')}
                    />
                    <BottomNavigationAction
                        label="Peliculas"
                        icon={<MovieIcon />}
                        onClick={() => navigate('/peliculas')}
                    />
                    <BottomNavigationAction
                        label="Series"
                        icon={<OndemandVideoIcon />}
                        onClick={() => navigate('/series')}
                    />
                </BottomNavigation>
            </Paper>
            <Offset />
        </>
    )
}