import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  Header,
  Container,
  Divider,
  Table,
} from 'semantic-ui-react'
import moment from 'moment'

class Episodes extends React.Component {
  state = { episodes: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/episodes/')
      .then( res => {
        this.setState({episodes: res. data})
      })
  }
  
  formatDate = (date) => {
    const offset = (new Date()).getTimezoneOffset()/60
    return moment(date).utc().subtract(offset, 'hours').format('dddd,  MMMM Do,  YYYY')
  }

  episodes() {
    return this.state.episodes.map( (episodes, e) => {
      return (
        <Table.Body key={e}>
          <Table.Row>
            <Table.Cell textAlign='center'>
              {episodes.season}
            </Table.Cell>
            <Table.Cell textAlign='center'>
              {this.formatDate(episodes.airDate)}
            </Table.Cell>
            <Table.Cell strong>
              {episodes.name}
            </Table.Cell>
            <Table.Cell>
              {episodes.director}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      )
    })
  }

  render() {
    return(
      <div>
        <Divider hidden />
        <Container>
          <Header color='blue' as='h1' textAlign='center'>Game of Thrones Episodes</Header>
            <Table size='small' color='blue' inverted>
            <Table.Header>
              <Table.HeaderCell textAlign='center' width={1}>Season</Table.HeaderCell>
              <Table.HeaderCell textAlign='center' width={3}>Airdate</Table.HeaderCell>
              <Table.HeaderCell width={4}>Title</Table.HeaderCell>
              <Table.HeaderCell width={3}>Director</Table.HeaderCell>
            </Table.Header>
              {this.episodes()}
            </Table>
        </Container>
      </div>
    )
  }
}

export default connect()(Episodes)
