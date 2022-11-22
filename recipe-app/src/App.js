import RecipesList from "./components/RecipesList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <RecipesList />
      <ToastContainer />
    </div>
  );
}

export default App;
