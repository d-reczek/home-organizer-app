import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Theme } from "../common/theme/theme";

import { NavigationButton } from "./NavigationButton";
import { Icon, Slide } from "@mui/material";

export const BurgerNavigation = ({
  maxWidth1000,
  navItems,
  user,
  ButtonsContainer,
  handleSignOutClick,
}) => {
  return (
    <>
      <AppBar position="static" theme={Theme} color="secondary">
        <Container maxWidth="xl">
          <Slide in direction="right">
            <Toolbar
              sx={{ flexDirection: maxWidth1000 ? "column" : "" }}
              disableGutters>
              <IconButton>
                <Button
                  sx={{
                    color: Theme.palette.secondary.contrastText,
                    ":hover": { color: Theme.palette.primary.contrastText },
                  }}
                  color="secondary"
                  alt="home"
                  variant="square"
                  component={Link}
                  to="/">
                  <Icon>home</Icon>
                </Button>
              </IconButton>
              {navItems.map(
                item =>
                  user && (
                    <NavigationButton
                      key={item.label}
                      to={item.path}
                      item={item}
                    />
                  )
              )}

              {user ? (
                <ButtonsContainer>
                  <NavigationButton to="/user-panel" item="Panel użytkownika" />
                  <NavigationButton
                    to=""
                    item="Wyloguj"
                    handleClick={handleSignOutClick}
                  />
                </ButtonsContainer>
              ) : (
                <ButtonsContainer>
                  <NavigationButton to="/sign-in" item="Zaloguj" />
                </ButtonsContainer>
              )}
            </Toolbar>
          </Slide>
        </Container>
      </AppBar>
    </>
  );
};
