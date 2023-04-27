import { Component } from "react";
import Router from "next/router";

interface IPrevState {
  count: number;
}

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("after rendering");
  }

  componentDidUpdate() {
    console.log("after updating");
  }

  componentWillUnmount() {
    console.log("before unmounting");
    // Exit chatting room api
  }

  onClickCountUp = () => {
    console.log(this.state.count);
    this.setState((prevState: IPrevState) => ({
      count: prevState.count + 1,
    }));
  };

  onClickMove() {
    void Router.push("/");
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>Count Up</button>
        <button onClick={this.onClickMove}>Exit chatting room</button>
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
