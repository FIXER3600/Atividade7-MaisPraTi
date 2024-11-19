import ChangeBackgroundColor from "./components/ChangeBackgroundColor";
import Counter from "./components/Counter";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";


function App() {
  return (
    <div>
      <Counter/>
      <ChangeBackgroundColor/>
      <TaskList/>
      <Timer/>
      <Filter/>
    </div>
  );
}

export default App;
