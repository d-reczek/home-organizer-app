import styled from "styled-components";
import { Theme } from "../../common/theme/theme";

import { PageWrapper } from "../../common/page-wrapper/page-wrapper";

import { Typography } from "@mui/material";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BarChartIcon from "@mui/icons-material/BarChart";
import { BoxContainerUnlogged } from "./BoxContainerUnlogged";
import { BoxContainerDashboard } from "./BoxContainerDashboard";
import { Box } from "@mui/system";
import { BoxPanel } from "./BoxPanel";

import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { FadeComponent } from "../../common/page-wrapper/FadeComponent";
import { GrowComponent } from "../../common/page-wrapper/GrowComponent";

const TitleContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  marin-bottom: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HorizontalLine = styled.hr`
  background-color: ${Theme.palette.primary.contrastText};
  border-color: ${Theme.palette.primary.contrastText};
  width: 90%;
  height: 0.25rem;
`;

export const Intro = ({ usersNumber, tasksNumber, eventsNumber }) => {
  return (
    <PageWrapper title="Home App">
      <FadeComponent>
        <TitleContainer>
          <Typography variant="h4">
            Witaj w aplikacji Home Organizer!
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            Jeśli chcesz zapisać swoje zadania, zorganizować swój budżet domowy,
            nie zapomnieć ważnym wydarzeniu - załóż konto i zacznij korzystać z
            naszej aplikacji.
          </Typography>
        </TitleContainer>
        <GrowComponent>
          <TitleContainer>
            <BoxContainerUnlogged>
              <FormatListNumberedIcon
                sx={{ marginLeft: "1rem", fontSize: "3rem" }}
              />
              <Typography variant="h4" sx={{ margin: "1rem" }}>
                Zadania
              </Typography>
              <HorizontalLine />
              <Typography sx={{ margin: "1rem", fontSize: "1rem" }}>
                Przeglądaj zadania do wykonania, dodaj nowe lub edytuj już
                istniejące.
              </Typography>
            </BoxContainerUnlogged>
            <BoxContainerUnlogged>
              <AccountBalanceWalletIcon
                sx={{ marginLeft: "1rem", fontSize: "3rem" }}
              />
              <Typography variant="h4" sx={{ margin: "1rem" }}>
                Budżet
              </Typography>
              <HorizontalLine />
              <Typography sx={{ margin: "1rem", fontSize: "1rem" }}>
                Zarządzaj domowym budżetem, wprowadź wpływy i wydatki, analizuj
                strukturę wydatków.
              </Typography>
            </BoxContainerUnlogged>
            <BoxContainerUnlogged>
              <ScheduleIcon sx={{ marginLeft: "1rem", fontSize: "3rem" }} />
              <Typography variant="h4" sx={{ margin: "1rem" }}>
                Kalendarz
              </Typography>
              <HorizontalLine />
              <Typography sx={{ margin: "1rem", fontSize: "1rem" }}>
                Dodaj daty, rocznice i terminy, o których już nigdy nie
                zapomnisz.
              </Typography>
            </BoxContainerUnlogged>

            <BoxContainerDashboard>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    variant="h4"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      margin: ".5rem",
                    }}>
                    <BarChartIcon
                      sx={{ marginLeft: "1rem", fontSize: "3rem" }}
                    />
                    <Typography
                      sx={{ margin: "0 0 0 .5rem", fontSize: "2rem" }}>
                      Panel
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{ align: "center", margin: ".5rem", fontSize: "1rem" }}>
                    Sprawdź dane i zasoby aplikacji.
                  </Typography>
                </Box>

                <HorizontalLine style={{ margin: "0 auto", width: "90%" }} />
              </Box>
              <BoxPanel>
                <GroupIcon sx={{ marginLeft: "1rem", fontSize: "2rem" }} />
                <Typography variant="h6" sx={{ margin: "1rem" }}>
                  Użytkownicy
                </Typography>
                <HorizontalLine />
                <Typography sx={{ margin: "1rem", fontSize: "2rem" }}>
                  {usersNumber}
                </Typography>
              </BoxPanel>
              <BoxPanel>
                <ListAltIcon sx={{ marginLeft: "1rem", fontSize: "2rem" }} />
                <Typography variant="h6" sx={{ margin: "1rem" }}>
                  Zadania
                </Typography>
                <HorizontalLine />
                <Typography sx={{ margin: "1rem", fontSize: "2rem" }}>
                  {tasksNumber}
                </Typography>
              </BoxPanel>
              <BoxPanel>
                <NotificationsActiveIcon
                  sx={{ marginLeft: "1rem", fontSize: "2rem" }}
                />
                <Typography variant="h6" sx={{ margin: "1rem" }}>
                  Wydarzenia
                </Typography>
                <HorizontalLine />
                <Typography sx={{ margin: "1rem", fontSize: "2rem" }}>
                  {eventsNumber}
                </Typography>
              </BoxPanel>
            </BoxContainerDashboard>
          </TitleContainer>
        </GrowComponent>
      </FadeComponent>
    </PageWrapper>
  );
};
