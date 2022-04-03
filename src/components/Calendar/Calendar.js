import { useEffect, useState } from "react";
import AddEventForm from "./Events/AddEventForm";
import NewEvent from "./Events/NewEvent";
import { PageWrapper } from "../../common/page-wrapper/page-wrapper";
import { Container, Typography } from "@mui/material";
import { firestore } from "../../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { useMediaQuery } from "@mui/material";
import { Theme } from "../../common/theme/theme";
import { FadeComponent } from "../../common/page-wrapper/FadeComponent";

const CalendarList = () => {
  const docRef = collection(firestore, "calendar");
  const docRefOrdered = query(docRef, orderBy("date"));

  const [items, setItems] = useState([]);

  const maxWidth1000 = useMediaQuery(
    `(max-width: ${Theme.breakpoints.maxWidth1000})`
  );

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const fetchData = () => {
    onSnapshot(docRefOrdered, doc => {
      let data = [];
      doc.docs.forEach(element => {
        data.push({ ...element.data(), id: element.id });
      });
      setItems(data);
    });
  };

  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [alert, setAlert] = useState(true);

  return (
    <PageWrapper>
      <FadeComponent>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: "40px" }}>
          Kalendarz
        </Typography>
      </FadeComponent>
      <FadeComponent>
        <Container
          maxWidth={maxWidth1000 ? "xl" : "md"}
          sx={{
            backgroundColor: Theme.palette.secondary.main,
            padding: "20px",
  
          }}>
          <AddEventForm
            item={item}
            setItem={setItem}
            date={date}
            setDate={setDate}
            alert={alert}
            setAlert={setAlert}
            docRef={docRef}
          />
          <Container sx={{ p: "0" }}>
            <NewEvent items={items} setItems={setItems} firestore={firestore} />
          </Container>
        </Container>
      </FadeComponent>
    </PageWrapper>
  );
};

export default CalendarList;
