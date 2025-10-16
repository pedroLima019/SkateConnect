import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "@/pages/Feed";
import Perfil from "@/pages/Perfil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route
          path="/perfil"
          element={
            <Perfil
              name={"Pedro Lima"}
              post={80}
              followers={200}
              follows={300}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
