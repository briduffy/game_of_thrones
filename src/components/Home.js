import React, { Component } from 'react';
import {
  Button,
  Icon,
} from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Button
          fluid
          animated='vertical'
          color='blue'
          size='big'
          href={'/characters'}
          rel="noopener norefferer"
        >
        <Button.Content visible>Game of Thrones Characters</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right'/>
        </Button.Content>
      </Button>
    );
  }
}

export default Home;
