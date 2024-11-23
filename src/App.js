import { Link } from "react-router-dom";
import ConfigRoutes from "./routes/router";
import './index.css';

function App() {
  return (
    <div className="app">
      <nav className="menu">
        <ul>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/change_background_color">Change Background Color</Link></li>
          <li><Link to="/task_list">Task List</Link></li>
          <li><Link to="/timer">Timer</Link></li>
          <li><Link to="/filter">Filter</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/request">Request</Link></li>
          <li><Link to="/galery">Gallery</Link></li>
          <li><Link to="/timer_alert">Timer Alert</Link></li>
          <li><Link to="/tabs">Tabs</Link></li>
        </ul>
      </nav>
      <div className="content">
        <ConfigRoutes />
      </div>
    </div>
  );
}

export default App;
