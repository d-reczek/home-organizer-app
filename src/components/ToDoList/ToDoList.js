import { useEffect, useState } from "react";
import AddTaskForm from "./Tasks/AddTaskForm";
import NewTask from "./Tasks/NewTask";
import Container from "@mui/material/Container";
import { Theme } from "../../common/theme/theme";
import { Typography } from "@mui/material";
import { PageWrapper } from "../../common/page-wrapper/page-wrapper";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useMediaQuery } from "@mui/material";
import { FadeComponent } from "../../common/page-wrapper/FadeComponent";
const ToDoList = () => {
  //firestore configuration
  //add referneces to collection to-do-list and oredered by timestamp
  const db = getFirestore();
  const colRef = collection(db, "to-do-list");
  const colRefOrdered = query(colRef, orderBy("timeStamp"));

  const maxWidth1000 = useMediaQuery(
    `(max-width: ${Theme.breakpoints.maxWidth1000})`
  );
  const [tasks, setTasks] = useState([]);
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
    onSnapshot(colRefOrdered, doc => {
      let data = [];
      doc.docs.forEach(element => {
        data.push({ ...element.data(), id: element.id });
      });
      setTasks(data);
    });
  };

  const [task, setTask] = useState("");

  return (
    <PageWrapper>
      <FadeComponent>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: "40px" }}>
          Lista zadań
        </Typography>
        <Container
          maxWidth={maxWidth1000 ? "xl" : "md"}
          sx={{
            backgroundColor: Theme.palette.secondary.main,
            margin: "0 auto",
            marginTop: "10px",
            padding: "0",
          }}>
          <Container sx={{p: "0"}}>
            <AddTaskForm task={task} setTask={setTask} colRef={colRef} />
            <NewTask tasks={tasks} setTasks={setTasks} db={db} />
          </Container>
        </Container>
      </FadeComponent>
    </PageWrapper>
  );
};

export default ToDoList;
