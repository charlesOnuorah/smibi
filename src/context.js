import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
