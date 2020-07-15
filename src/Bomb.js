import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.change(),
      1000
    );
  }
  
  change() {
    this.setState({
      count: (this.state.count + 1)
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    console.log('done'); 
  }

  bomb(count) {
    if (this.state.count % 2 === 0 && this.state.count < 8) {
      return 'tick'
    } else if (this.state.count % 2 === 1 && this.state.count < 8) {
      return 'tock'
    } else if (this.state.count === 8) {
      return 'BOOM!!!!'
    } else if (this.state.count === 9) {
      this.componentWillUnmount()
    }
  }

  render() {

    return(
      <div>
        <p>{this.bomb(this.state.count)}</p>
        <p></p>
      </div>
    )
  }

}

export default Bomb;

// A component that uses life-cycles, setInterval and state to alternate between rendering either
//  "tick" or "tock" for a time and then rendering "BOOM!!!!".

// Make a component called Bomb inside the ./src/state-drills/ folder. Update your index.js
//  to use the Bomb component to check that it works.
// The component should render a div element. Inside the div there should be a p that
//  contains content of either "tick", "tock" or "BOOM!!!!".
// The component will have an initial state with a property count of 0.
// When the component mounts, register an interval that adds 1 to the count in state every second.
// When the component unmounts, clear the interval.
// When the count is divisible by 2, display the word "tick".
// When the count isn't divisible by 2, display the word "tock".
// If the count goes equal to or above 8, display "BOOM!!!!".
// When the count goes above or equal to 8, also clear the interval!
// Tips:

// To check if a number is divisible by 2, you can use the modulo operator.
// An interval will repeatedly invoke a callback as often as specified by the milliseconds argument.
// You can create an interval by using let interval = setInterval(callback, timeInMs).
// You can clear an interval by using clearInterval(interval).