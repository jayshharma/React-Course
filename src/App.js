import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
 
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/create">
            <Create></Create>
          </Route>
          <Route exact path="/blogs/:id"> 
            <BlogDetails></BlogDetails>
          </Route>
          <Route path="*"> 
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

//router component must be wrapped around the entire app function for routes to be used throughout the entire app.
//routes are used to switch between different pages given their unique paths. The "exact" prop must be attributed for similar paths to distinctly work.
//surround all routes by switch component to make sure only one route component shows up at once
//route parameters used to render a route that has a certain changeable path. for ex. a blog details page 

export default App;
