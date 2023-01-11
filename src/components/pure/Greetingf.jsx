import React, { useState } from "react";
import PropTypes from "prop-types";

function Greetingf(props) {
  const [age, setAge] = useState(30);

  const birthday = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>Hola {props.name}! con componentes funcionales</h1>
      <h2>Tu Edad es: {age} </h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
}

Greetingf.propTypes = {
  name: PropTypes.string,
};

export default Greetingf;
