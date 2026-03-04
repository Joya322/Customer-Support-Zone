import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <ToastContainer position="top-right"/>
      {/* navbar */}
      <Navbar />
      {/* Main */}
      <Main />
    </TaskProvider>
  );
}

export default App;
