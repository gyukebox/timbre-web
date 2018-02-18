import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import queryString from 'query-string';

const Home = () => {
  return (
    <div>
      <h2>홈</h2>
    </div>
  );
};

const About = ({ location, match }) => {
  const query = queryString.parse(location.search);
  console.log(query);

  return (
    <div>
      <h2>About {match.params.name}</h2>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route exact path='/' component={Home} />
        <Switch>
          <Route path='/about/:name' component={About} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
