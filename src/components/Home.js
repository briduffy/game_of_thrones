import React, { Component } from 'react';
import {
  Button,
  Icon,
  Container, 
} from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
     <Container>
       <Button
          fluid
          animated='vertical'
          color='teal'
          size='big'
          href={'/characters'}
          rel="noopener norefferer"
        >
        <Button.Content visible>Game of Thrones Characters</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right'/>
        </Button.Content>
        </Button>
     </Container>
    );
  }
}

export default Home;
