import { Grow } from "@mui/material";

export const GrowComponent = ({ children }) => {
  return (
    <Grow style={{ width: "100%" }} in={true} timeout={1000}>
      <main>{children}</main>
    </Grow>
  );
};
