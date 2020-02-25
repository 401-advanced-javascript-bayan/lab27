import React from 'react'

class Main extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      ctr: 0
    }
  }

  handleClick1 = e => {
    e.preventDefault();
    let ctr = this.state.ctr;
    ++ctr;
    this.setState({ ctr });
  }

  handleClick2 = e => {
    e.preventDefault();
    let ctr = this.state.ctr;
    --ctr;
    this.setState({ ctr });
  }
  render() {
    return (
      <section>
        <h3>{this.state.ctr}</h3>
        <button onClick={this.handleClick1}>click for counter</button>
        <button onClick={this.handleClick2}>click for counter</button>
      </section>
    )
  }
}
export default Main;