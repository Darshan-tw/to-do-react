import "./App.css";
import Body from "./component/Body";
import Header from "./component/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotesPage from "./pages/NotesPages";

const App = () => {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={Body} />
          <Route path="/notes/:id" component={NotesPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
