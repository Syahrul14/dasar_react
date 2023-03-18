import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button>click</button>
      </div>
    );
  }
}
Button.protoType = {
  color: PropTypes.string,
};
export default Button;
