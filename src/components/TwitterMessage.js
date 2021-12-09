import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      count: 280
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      count: 280 - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)} />
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default TwitterMessage;
