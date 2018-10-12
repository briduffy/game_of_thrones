import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  Header,
  Container,
  Card,
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

  characters() {
    return this.state.characters.map( (characters, c) => {
      if (characters.imageLink) {
        return (
          <Card key={c}>
            <Image src={`https://api.got.show${characters.imageLink}`}/>
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
        )
      }
    })
  }
  render() {
    return(
      <Container>
        <Header as='h1' textAlign='center'>Game of Thrones Characters</Header>
        <Card.Group itemsPerRow={4}>
          {this.characters()}
        </Card.Group>
      </Container>
    )
  }
}
export default connect()(Characters)