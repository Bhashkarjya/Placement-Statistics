import Year from "./components/Year";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Placements from "./components/Placement";
import Trial from "./components/Trial";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Year}/>
        <Route exact path='/2020-21' component={Placements} />
        <Route exact path='/2019-20' component={Trial} />
      </Router>
    </div>
  );
}

export default App;
