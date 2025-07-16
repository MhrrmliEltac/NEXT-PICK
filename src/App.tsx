import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
