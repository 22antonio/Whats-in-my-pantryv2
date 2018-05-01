import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/communityRecipes">Community Recipes</Link>
        </li>
        <li>
          <Link to="/information">Information</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
      <Route path="/communityRecipes" component={CommunityRecipes} />
      <Route path="/information" component={Information} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Here we are going to have two maps of Fresh food markets or Farmers markets and if food bank or food pantrys in town.
    As well as an introduction to what the website does.</p>
  </div>
);

const CommunityRecipes = () => (
  <div>
    <h2>Community Recipes</h2>
    <p>Here we are going to have user inputted recipes that can be searched by a user from a sql data base. We will also have a section to add new recipes.
    The recipes will have kern county public health vet badge.</p>
  </div>
);

const Information = () => (
  <div>
    <h2>Information</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;
