import React, { Component } from 'react';
import {
  Button,
  Icon,
  Container,
  Header,
  Divider,
} from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container>
        <Divider hidden />
        <Header color='blue' as='h1' textAlign='center'>Everything Game of Thrones</Header>
        <Button
            fluid
            animated='vertical'
            color='blue'
            size='big'
            href={'/characters'}
            rel="noopener norefferer"
          >
          <Button.Content visible>Characters</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right'/>
          </Button.Content>
        </Button>
        <Divider hidden />
        <Button
            fluid
            animated='vertical'
            color='blue'
            size='big'
            href={'/episodes'}
            rel="noopener norefferer"
          >
          <Button.Content visible>Episodes</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right'/>
          </Button.Content>
        </Button>
      </Container>
    );
  }
}

export default Home;
