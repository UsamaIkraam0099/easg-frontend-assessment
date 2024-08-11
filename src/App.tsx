// others
import ProtectedRoute from "./protectedRoute";
import { SignUp, SignIn, Home } from "./views";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
