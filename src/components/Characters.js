import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  Header,
  Container,
  Card,
  Image,
  Divider,
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
          <Card color='blue' key={c}>
            <Image size='small' verticalAlign='middle' centered src={`https://api.got.show${characters.imageLink}`}/>
            <Card.Content>
              <Card.Header textAlign='center'>
                {characters.name}
              </Card.Header>
              <Divider />
              <Card.Description>
              <Header as='h4' color='blue'>House</Header>
                {characters.house ? `${characters.house}` : 'Unknown House'}
              </Card.Description>
              <Divider />
              <Card.Description>
              <Header as='h4' color='blue'>Life</Header>
                {characters.dateOfBirth ? `Date of Birth:  ${characters.dateOfBirth}` : 'Birth Unknown'}
              </Card.Description>
              <Card.Description>
                {characters.dateOfDeath ? `Date of Death:  ${characters.dateOfDeath}` : 'Death Unknown'}
              </Card.Description>
              <Divider />
              <Card.Description>
                <Header as='h4' color='blue'>Parents</Header>
                {characters.mother ? `Mother:  ${characters.mother}` : 'Mother Unknown'}
              </Card.Description>
              <Card.Description>
                {characters.father ? `Father:  ${characters.father}` : 'Father Unknown'}
              </Card.Description>
            </Card.Content>
          </Card>
        )
      }
    })
  }
  render() {
    return(
      <div>
        <Divider hidden />
        <Container>
          <Header color='blue' as='h1' textAlign='center'>Game of Thrones Characters</Header>
          <Card.Group itemsPerRow={4}>
            {this.characters()}
          </Card.Group>
        </Container>
      </div>
    )
  }
}
export default connect()(Characters)