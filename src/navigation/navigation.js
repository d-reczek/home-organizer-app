import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Theme } from "../common/theme/theme";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../userContext/UserContext";
import { NavigationButton } from "./NavigationButton";
import styled from "@emotion/styled";
import { Icon, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { BurgerNavigation } from "./BurgerNavigation";
const ButtonsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${Theme.palette.secondary.main};
`;
const navItems = [
  { label: "Zadania", path: "/tasks" },
  { label: "Budżet", path: "/budget" },
  { label: "Kalendarz", path: "/calendar" },
];
export const Navigation = () => {
  const maxWidth1000 = useMediaQuery(
    `(max-width: ${Theme.breakpoints.maxWidth1000})`
  );
  const navigate = useNavigate();
  const { user, avatarUrl } = useContext(UserContext);

  const handleSignOutClick = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/");
      alert("Zostałeś wylogowany");
    });
  };
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    if (maxWidth1000) {
      setShowMenu(true);
    }
    if (showMenu) {
      setShowMenu(false);
    }
  };
  return !maxWidth1000 ? (
    <AppBar position="static" theme={Theme} color="secondary">
      <Container maxWidth="xl">
        <Toolbar
          sx={{ flexDirection: maxWidth1000 ? "column" : "" }}
          disableGutters>
          <IconButton key="icon-button">
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
                <NavigationButton key={item.label} to={item.path} item={item} />
              )
          )}
          {user ? (
            <ButtonsContainer>
              <Avatar
                variant="square"
                src={avatarUrl}
                alt="avatar"
                sx={{
                  marginRight: "10px",
                  backgroundColor: "black",
                  padding: "1px",
                }}
              />

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
      </Container>
    </AppBar>
  ) : (
    <>
      <MenuIconContainer>
        <MenuIcon
          onClick={handleShowMenu}
          sx={{
            cursor: "pointer",
            color: "#fff",
            padding: "5px",
            textAlign: "center",
            fontSize: "5rem",
            transition: "all",
            transitionDuration: "0.4s",
            ":hover": {
              color: Theme.palette.primary.contrastText,
              borderRadius: "none",
            },
          }}
        />
      </MenuIconContainer>
      {showMenu && (
        <BurgerNavigation
          maxWidth1000={maxWidth1000}
          navItems={navItems}
          user={user}
          ButtonsContainer={ButtonsContainer}
          handleSignOutClick={handleSignOutClick}
        />
      )}
    </>
  );
};
