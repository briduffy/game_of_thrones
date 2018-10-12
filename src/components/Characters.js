import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  Header,
  Container,
  Card,
  Button,
  Icon,
  Image,
} from 'semantic-ui-react'

class Characters extends React.Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
      .then( res => {
        this.setState({ characters: res.data })
      })
  }

  render(){
    return(
      <Container>
        <Card.Group itemsPerRow={3}>
          {this.state.characters.map( (characters, c) =>
          <Card key={c}>
            <Image src={characters.imageLink}/>
            <Card.Content>
              <Card.Header textAlign='centered'>
                {characters.name}
              </Card.Header>
              <Card.Meta>
                {characters.house}
              </Card.Meta>
              <Card.Meta>
                {characters.dateOfBirth}
              </Card.Meta>
              <Card.Meta>
                {characters.dateOfDeath}
              </Card.Meta>
              <Card.Description>
                {characters.mother}
              </Card.Description>
              <Card.Description>
                {characters.father}
              </Card.Description>
            </Card.Content>
          </Card>
          )}
        </Card.Group>
      </Container>
    )
  }
}

export default connect()(Characters)