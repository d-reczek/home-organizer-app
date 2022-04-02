import { Grow } from "@mui/material";

export const GrowComponent2 = ({ children }) => {
  return (
    <Grow in={true} timeout={1000}>
      <main>{children}</main>
    </Grow>
  );
};
