import { Routes, Route } from "react-router-dom";
import Counter from "../components/Counter";
import ChangeBackgroundColor from "../components/ChangeBackgroundColor";
import TaskList from "../components/TaskList";
import Timer from "../components/Timer";
import Filter from "../components/Filter";
import Form from "../components/Form";
import Request from "../components/Request";
import Galery from "../components/Galery";
import TimerAlert from "../components/TimerAlert";
import Tabs from "../components/Tabs";

export function ConfigRoutes() {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/change_background_color" element={<ChangeBackgroundColor />} />
      <Route path="/task_list" element={<TaskList />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/form" element={<Form />} />
      <Route path="/request" element={<Request />} />
      <Route path="/galery" element={<Galery />} />
      <Route path="/timer_alert" element={<TimerAlert />} />
      <Route path="/tabs" element={<Tabs />} />
    </Routes>
  );
}

export default ConfigRoutes;
