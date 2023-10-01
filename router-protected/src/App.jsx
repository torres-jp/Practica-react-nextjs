import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Admin, Analitycs, Dashboard, Home, Landing } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    //request done
    setUser({
      id: 1,
      name: "Juan",
      permission: ["analize"],
      roles: [],
    });
  };

  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Navigation />

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route
          path="/analitycs"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.permission.includes("analize")}
              redirectTo="/home"
            >
              <Analitycs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAllowed={!!user && user.roles.includes("admin")}
              redirectTo="/home"
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analitycs">Analitycs</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
