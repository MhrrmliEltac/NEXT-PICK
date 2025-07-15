import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <main className="mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
