import logo from './logo.svg';
import './App.css';
import  "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
