import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";
import Training from "../src/pages/Training";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
