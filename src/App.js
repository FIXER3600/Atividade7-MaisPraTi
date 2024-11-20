import ChangeBackgroundColor from "./components/ChangeBackgroundColor";
import Counter from "./components/Counter";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Request from "./components/Request";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";


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
    </div>
  );
}

export default App;
