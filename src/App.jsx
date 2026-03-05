import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { TaskProvider } from "./context/TaskContext";
import Footer from "./components/Footer";

function App() {
  return (
    <TaskProvider>
      <ToastContainer position="top-right"/>
      {/* navbar */}
      <Navbar />

      {/* Main */}
      <Main />

      {/* footer */}
      <Footer/>
    </TaskProvider>
  );
}

export default App;
