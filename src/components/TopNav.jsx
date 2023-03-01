import { AppBar, Box, Link, Toolbar, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../public/hoo_tv_logo.svg';
import '../styles/topNav.css'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);


export const TopNav = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} >
                        <img className="logo" src={logo} alt="hoo-play-logo" />
                    </Box>
                    <Link href="http://action_search" color="inherit">
                        <SearchIcon />
                    </Link>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    )
}