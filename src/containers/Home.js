import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { invokeApig } from '../libs/awsLib';
import {
  PageHeader,
  ListGroup,
   ListGroupItem,
} from 'react-bootstrap';
import './Home.css';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      notes: [],
    };
  }
async componentDidMount() {
  if (this.props.userToken === null) {
    return;
  }

  this.setState({ isLoading: true });

  try {
    const results = await this.notes();
    this.setState({ notes: results });
  }
  catch(e) {
    alert(e);
  }

  this.setState({ isLoading: false });
}

notes() {
  return invokeApig({ path: '/serverlessApp' }, this.props.userToken);
}
  renderNotesList(notes) {
    return null;
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    );
  }

  renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          { ! this.state.isLoading
            && this.renderNotesList(this.state.notes) }
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        { this.props.userToken === null
          ? this.renderLander()
          : this.renderNotes() }
      </div>
    );
  }
}

export default withRouter(Home);