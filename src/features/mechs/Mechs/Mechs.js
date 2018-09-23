import React, { Component } from "react";
import { connect } from "react-redux";

import { Grid, Segment, Header } from "semantic-ui-react";

import MechsList from "../MechsList";
import MechDetails from "../MechDetails";

import schema from "app/schema";

import { selectMech } from "../mechActions";
import { selectCurrentMech } from "../mechSelectors";

const mapState = state => {
  const session = schema.session(state.entities);
  const { Mech } = session;

  const mechs = Mech.all()
    .toModelArray()
    .map(mechModel => {
      const mech = {
        ...mechModel.ref,
        // provide a default empty object for the relation mech to type
        mechType: {}
      };

      if (mechModel.type) {
        // Replace the default object with a copy of the relations data
        mech.mechType = { ...mechModel.type.ref };
      }
      return mech;
    });
  const currentMech = selectCurrentMech(state);
  return { mechs, currentMech };
};

const actions = {
  selectMech
};

class Mechs extends Component {
  render() {
    const { mechs = [], selectMech, currentMech } = this.props;

    const currentMechEntry =
      mechs.find(mech => mech.id === currentMech) || {};

    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Mechs List</Header>
            <MechsList
              mechs={mechs}
              onMechClicked={selectMech}
              currentMech={currentMech}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h3">Mech Details</Header>
            <Segment>
              <MechDetails mech={currentMechEntry} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
export default connect(
  mapState,
  actions
)(Mechs);
