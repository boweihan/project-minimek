import React, { Component } from "react";
import { connect } from "react-redux";

import { Grid, Segment, Header } from "semantic-ui-react";

import PilotsList from "../PilotsList";
import PilotDetails from "../PilotDetails";

import schema from "app/schema";

const mapState = state => {
  const session = schema.session(state.entities);
  const { Pilot } = session;

  const pilots = Pilot.all().toModelArray().map(pilotModel => {
    // access underlying plain JS object with ref field and make copy
    const pilot = {
      ...pilotModel.ref
    };

    // lookup using FK field
    const { mech } = pilotModel;

    // if there is an associated mech include the mech id in the data
    // passed to the component
    if (mech && mech.type) {
      pilot.mechType = mech.type.id;
    }

    return pilot;
  });

  return { pilots };
};

export class Pilots extends Component {
  render() {
    const { pilots = [] } = this.props;

    // Use the first pilot as the "current" one for display, if available.
    const currentPilot = pilots[0] || {};

    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Pilot List</Header>
            <PilotsList pilots={pilots} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h3">Pilot Details</Header>
            <Segment>
              <PilotDetails pilot={currentPilot} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default connect(mapState)(Pilots);
