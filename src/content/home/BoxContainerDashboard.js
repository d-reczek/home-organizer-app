import { Box } from "@mui/material";
import { Theme } from "../../common/theme/theme";
import { useMediaQuery } from "@mui/material";

export const BoxContainerDashboard = ({ to, children }) => {
  const maxWidth1000 = useMediaQuery(
    `(max-width: ${Theme.breakpoints.maxWidth1000})`
  );
  return (
    <Box
      sx={{
        flexGrow: "1",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        background: Theme.palette.secondary.main,
        width: maxWidth1000 ? "100%" : "100%",
        textDecoration: "none",
        color: Theme.palette.secondary.contrastText,
      }}>
      {children}
    </Box>
  );
};
