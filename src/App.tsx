import { Container, Typography } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import HabitStates from "./components/HabitStates";


const App = () => {
     
  return (
    <Container maxWidth="md">
      <Typography component={"h1"} variant="h2" align="center">
        Habit Tracker
      </Typography>
      <AddHabitForm />
      <HabitList />
      <HabitStates/>
    </Container>
  );
};

export default App;
