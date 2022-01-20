import { Link } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Theme } from "../common/theme";

const navItems = [
    { label: 'Home', path: '/'},
    { label: 'Zadania', path: '/tasks'},
    { label: 'Budżet', path: '/budget'},
    { label: 'Wydarzenia', path: '/events'},
    { label: 'Dashboard', path: '/dashboard'},
]

export const Navigation = () => {
    return <AppBar position="static" theme={ Theme } color="secondary">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <IconButton>
                    <Avatar alt="home" variant="square" src="https://cdn-icons.flaticon.com/png/512/2641/premium/2641242.png?token=exp=1642532667~hmac=3feed74840706f0edc33608bbd1c8e90"/>
                </IconButton>
                {
                    navItems.map(item => (
                        <Button key={item.label} sx={{my: 2, color: 'inherit'}} component={Link} to={item.path}>
                            {item.label}
                        </Button>
                    ))
                }
                 <Button color="inherit">Login</Button>
            </Toolbar>
        </Container>
    </AppBar>
}