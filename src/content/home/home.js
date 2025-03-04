import { HomeLogin } from "./HomeLogin";
import { Intro } from "./Intro";
import { useContext } from "react";
import { UserContext } from "../../userContext/UserContext";
import { firestore } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { FadeComponent } from "../../common/page-wrapper/FadeComponent";
import { GrowComponent } from "../../common/page-wrapper/GrowComponent";
import styled from "styled-components";
import { Theme } from "../../common/theme/theme";

const TitleContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

export const Home = () => {
  const { user } = useContext(UserContext);

  const usersRef = collection(firestore, "user-data");
  const tasksRef = collection(firestore, "to-do-list");
  const eventsRef = collection(firestore, "calendar");

  const [usersNumber, setUsersNumber] = useState();
  const [tasksNumber, setTasksNumber] = useState();
  const [eventsNumber, setEventsNumber] = useState();
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [userTasksNumber, setUserTasksNumber] = useState("");
  const [userEventsNumber, setUserEventsNumber] = useState("");

  let usersCounter = 0;
  let tasksCounter = 0;
  let tasksUserCounter = 0;
  let eventsUserCounter = 0;
  let eventsCounter = 0;

  const getUserNameAndSurname = () => {
    userData.forEach(item => {
      if (item.email === user.email) {
        setName(item.name);
        setSurname(item.surname);
      }
    });
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchUsers();
      fetchTasks();
      fetchEvents();
      if (user) {
        fetchUserEvents();
        fetchUserTasks();
      }
    }
    return () => {
      isMounted = false;
    };
  }, [user]);

  useEffect(() => {
    fetchUsers();
    if (user) {
      getUserNameAndSurname();
    }
  }, [usersNumber]);

  const fetchUsers = () => {
    onSnapshot(usersRef, doc => {
      let data = [];
      doc.docs.forEach(element => {
        usersCounter += 1;
        data.push({ ...element.data() });
      });
      setUserData(data);
      setUsersNumber(usersCounter);
    });
  };
  const fetchTasks = () => {
    onSnapshot(tasksRef, doc => {
      doc.docs.forEach(() => {
        tasksCounter += 1;
      });
      setTasksNumber(tasksCounter);
    });
  };
  const fetchUserTasks = () => {
    onSnapshot(tasksRef, doc => {
      doc.docs.forEach(element => {
        tasksCounter += 1;
        const data = element.data();
        if (data.uid === user.uid) {
          tasksUserCounter += 1;
        }
        setUserTasksNumber(tasksUserCounter);
      });
      setTasksNumber(tasksCounter);
    });
  };
  const fetchEvents = () => {
    onSnapshot(eventsRef, doc => {
      doc.docs.forEach(() => {
        eventsCounter += 1;
      });
      setEventsNumber(eventsCounter);
    });
  };
  const fetchUserEvents = () => {
    onSnapshot(eventsRef, doc => {
      doc.docs.forEach(element => {
        const data = element.data();
        if (data.uid === user.uid) {
          eventsUserCounter += 1;
        }
        setUserEventsNumber(eventsUserCounter);
      });
    });
  };

  return user ? (
    <HomeLogin
      name={name}
      surname={surname}
      usersNumber={usersNumber}
      userTasksNumber={userTasksNumber}
      userEventsNumber={userEventsNumber}
    />
  ) : (
    <Intro
      usersNumber={usersNumber}
      tasksNumber={tasksNumber}
      eventsNumber={eventsNumber}
    />
  );
};
