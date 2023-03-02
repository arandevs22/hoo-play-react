import { AppBar, Box, Link, Toolbar, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import '../styles/topNav.css';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);


export const TopNav = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} >
                        <img className="logo" src="https://raw.githubusercontent.com/arandevs22/hoo_play/d4c9aa916aa9c1768a0d3309ecc6d95fe0352ac3/img/hoo_tv_logo.svg" alt="hoo-play-logo" />
                    </Box>
                    <Link href="http://action_search" color={"#01EB78"}>
                        <SearchIcon />
                    </Link>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    )
}