import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div>
      <MyNavbar />
      <Welcome />
      <AllTheBooks />
    </div>
  );
}

export default App;
