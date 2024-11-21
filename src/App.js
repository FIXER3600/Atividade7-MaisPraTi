import ChangeBackgroundColor from "./components/ChangeBackgroundColor";
import Counter from "./components/Counter";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Galery from "./components/Galery";
import Request from "./components/Request";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import TimerAlert from "./components/TimerAlert";


function App() {
  return (
    <div >
      <Counter/>
      <ChangeBackgroundColor/>
      <TaskList/>
      <Timer/>
      <Filter/>
      <Form/>
      <Request/>
      <Galery/>
      <TimerAlert/>
    </div>
  );
}

export default App;
