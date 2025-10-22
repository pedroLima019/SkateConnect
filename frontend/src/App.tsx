import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Feed from "@/pages/Feed";
import Profile from "@/pages/Profile";
import CreatePost from "./pages/CreatePost";
import Login from "./components/Login";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route
          path="/feed"
          element={
            <motion.div
              className="bg-black text-white min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Feed />
            </motion.div>
          }
        />
        <Route
          path="/profile"
          element={
            <motion.div
              className="bg-black text-white min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Profile
                name="Pedro Lima"
                post={80}
                followers={200}
                follows={300}
              />
            </motion.div>
          }
        />
        <Route
          path="/createPost"
          element={
            <motion.div
              className="bg-black min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <CreatePost />
            </motion.div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
