import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Characters from './Characters'
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const styles = {
  background: {
    backgroundColor: '#F5F5F5',
    backgroundSize: 'cover'
  },
}

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/characters' component={Characters} />
            <Route component={NoMatch} />
          </Switch>
      </Segment>
    );
  }
}

export default App;
