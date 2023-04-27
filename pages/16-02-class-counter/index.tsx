import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = () => {
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>Count Up</button>
      </>
    );
  }
}

// class AAA {
//     power = 50
//     attack(){

//     }
// }

// class BBB extends AAA {
//     run(){

//     }
// }

// const mybbb = new BBB()
// mybbb.attack()
