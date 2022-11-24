import RecipesList from "./components/RecipesList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import { useEffect, useState } from "react";
import TokenService from "./services/token.service";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isValidToken = TokenService.checkToken()
    setIsAuthenticated(isValidToken)
  }, [])

  const handleSignout = () => {
    TokenService.removeLocalAccessToken()
    setIsAuthenticated(false)
  }

  return (
    <div className="App">
      <nav>
        {isAuthenticated && <button onClick={handleSignout}>signout</button>}
      </nav>
      <BrowserRouter>
        <Routes>
          {!isAuthenticated ? (
            <Route path="/" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
          ) : (
            <Route path="/" element={<RecipesList />} />
          )}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
