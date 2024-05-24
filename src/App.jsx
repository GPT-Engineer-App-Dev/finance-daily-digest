import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index colorMode={colorMode} toggleColorMode={toggleColorMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
