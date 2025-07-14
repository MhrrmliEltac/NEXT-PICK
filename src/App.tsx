import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";

function App() {
  return (
    <main className="mx-auto">
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
