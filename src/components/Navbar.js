import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../img/logo-white-nb.png";
import { useDispatch } from "react-redux";
import { SetView } from "../actions";
import { click } from "@testing-library/user-event/dist/click";
const pages = ["Clients", "Status", "Staff"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [Sign, setSign] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        let clicked_view = event.currentTarget.innerText;
        setAnchorElNav(event.currentTarget);
        dispatch(SetView(clicked_view.toUpperCase()));
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        let clicked_view = event.currentTarget.innerText;
        setAnchorElNav(null);
        dispatch(SetView(clicked_view.toUpperCase()));
    };

    const handleCloseUserMenu = (e) => {
        switch (e.target.innerText) {
            case "Logout":
                signOut(auth);
                navigate("../login", { replace: true });
                break;
            case "Profile":
                dispatch(SetView(e.target.innerText?.toUpperCase()));
                break;
            case "Account":
                dispatch(SetView(e.target.innerText?.toUpperCase()));
                break;
            case "Dashboard":
                dispatch(SetView(e.target.innerText?.toUpperCase()));
                break;
            default:
                console.log("DEFAULT");
        }
        setAnchorElUser(null);
    };

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        Phase Three Trading
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign='center'>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        {props.main}
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='Open settings'>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar alt='phase-logo' src={Logo} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign='center'>
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
