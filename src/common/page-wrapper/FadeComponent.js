import { Fade } from "@mui/material";

export const FadeComponent = ({ children }) => {
  return (
    <Fade style={{ width: "100%", padding: "0" }} in={true} timeout={800}>
      <main>{children}</main>
    </Fade>
  );
};
