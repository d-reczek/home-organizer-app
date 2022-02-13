import styled from "styled-components";
import { Theme } from "../../common/theme/theme";

import { PageWrapper } from "../../common/page-wrapper/page-wrapper";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BarChartIcon from "@mui/icons-material/BarChart";

const TileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const HorizontalLine = styled.hr`
  background-color: ${Theme.palette.primary.contrastText};
  border-color: ${Theme.palette.primary.contrastText};
  width: 70%;
  height: 0.25rem;
  margin: 1rem;
`;

export const Intro = () => {
  return (
    <PageWrapper title="Home App">
      <Typography variant="h4"> Witaj w aplikacji Home Organizer!</Typography>
      <Typography sx={{ textAlign: "center" }} variant="h6">
        Jeśli chcesz zapisać swoje zadania, zorganizować swój budżet domowy, nie
        zapomnieć ważnym wydarzeniu - załóż konto i zacznij korzystać z naszej
        aplikacji.
      </Typography>
      <TileContainer>
        <Box
          sx={{
            background: Theme.palette.secondary.main,
            margin: "2rem",
            padding: "1rem",
            minWidth: "40rem",
            minHeight: "10rem",
            border: "3px solid transparent",
            borderCollapse: "collapse",
            textDecoration: "none",
            color: Theme.palette.secondary.contrastText,
          }}>
          <FormatListNumberedIcon
            sx={{ marginLeft: "1rem", fontSize: "3rem" }}
          />
          <Typography variant="h4" sx={{ margin: "1rem" }}>
            Zadania
          </Typography>
          <HorizontalLine />
          <Typography
            paragraph="true"
            sx={{ margin: "1rem", fontSize: "1rem" }}>
            Przeglądaj zadania do wykonania, dodaj nowe lub edytuj już
            istniejące.
          </Typography>
        </Box>
        <Box
          sx={{
            background: Theme.palette.secondary.main,
            margin: "2rem",
            padding: "1rem",
            minWidth: "40rem",
            minHeight: "10rem",
            border: "3px solid transparent",
            borderCollapse: "collapse",
            textDecoration: "none",
            color: Theme.palette.secondary.contrastText,
          }}>
          <AccountBalanceWalletIcon
            sx={{ marginLeft: "1rem", fontSize: "3rem" }}
          />
          <Typography variant="h4" sx={{ margin: "1rem" }}>
            Budżet
          </Typography>
          <HorizontalLine />
          <Typography
            paragraph="true"
            sx={{ margin: "1rem", fontSize: "1rem" }}>
            Zarządzaj domowym budżetem, wprowadź wpływy i wydatki, analizuj
            strukturę wydatków.
          </Typography>
        </Box>
        <Box
          sx={{
            background: Theme.palette.secondary.main,
            margin: "2rem",
            padding: "1rem",
            minWidth: "40rem",
            minHeight: "10rem",
            border: "3px solid transparent",
            borderCollapse: "collapse",
            textDecoration: "none",
            color: Theme.palette.secondary.contrastText,
          }}>
          <ScheduleIcon sx={{ marginLeft: "1rem", fontSize: "3rem" }} />
          <Typography variant="h4" sx={{ margin: "1rem" }}>
            Kalendarz
          </Typography>
          <HorizontalLine />
          <Typography
            paragraph="true"
            sx={{ margin: "1rem", fontSize: "1rem" }}>
            Dodaj daty, rocznice i terminy, o których już nigdy nie zapomnisz.
          </Typography>
        </Box>
        <Box
          sx={{
            background: Theme.palette.secondary.main,
            margin: "2rem",
            padding: "1rem",
            minWidth: "40rem",
            minHeight: "10rem",
            border: "3px solid transparent",
            borderCollapse: "collapse",
            textDecoration: "none",
            color: Theme.palette.secondary.contrastText,
          }}>
          <BarChartIcon sx={{ marginLeft: "1rem", fontSize: "3rem" }} />
          <Typography variant="h4" sx={{ margin: "1rem" }}>
            Dashboard
          </Typography>
          <HorizontalLine />
          <Typography
            paragraph="true"
            sx={{ margin: "1rem", fontSize: "1rem" }}>
            Sprawdź dane i zasoby aplikacji.
          </Typography>
        </Box>
      </TileContainer>
    </PageWrapper>
  );
};
