import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Welcome from "./components/Welcome";

import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

import history from "./data/history.json";

import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";

function App() {
  return (
    <div>
      <MyNavbar />
      <Welcome />
      <BookList books={fantasy} />
      {/* <AllTheBooks /> */}
      <MyFooter />
    </div>
  );
}

export default App;
