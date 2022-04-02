import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Theme } from "../../common/theme/theme";
import { useMediaQuery } from "@mui/material";
export const BoxContainer = ({ to, children }) => {
  const maxWidth1000 = useMediaQuery(
    `(max-width: ${Theme.breakpoints.maxWidth1000})`
  );
  return (
    <Box
      component={Link}
      to={to}
      sx={{
        flexGrow: "1",
        boxSizing: "border-box",
        background: Theme.palette.secondary.main,
        padding: "1rem",
        width: maxWidth1000 ? "100%" : "30%",
        border: "3px solid transparent",
        textDecoration: "none",
        color: Theme.palette.secondary.contrastText,
        ":hover": {
          cursor: "pointer",
          border: `3px solid ${Theme.palette.primary.contrastText}`,
        },
      }}>
      {children}
    </Box>
  );
};
