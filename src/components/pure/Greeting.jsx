import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 39,
    };
  }

  render() {
    return (
      <div>
        <h1>Hola {this.props.name}! con componentes de clases</h1>
        <h2>Tu Edad es: {this.state.age}</h2>
        <div>
            <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  };
}

Greeting.propTypes = {
  name: PropTypes.string,
};
