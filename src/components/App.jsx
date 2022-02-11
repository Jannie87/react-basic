import { Component } from "react";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isListVisable: false };
  }
  toggleList = () => {
    this.setState({ isListVisable: !this.state.isListVisable });
  };

  render() {
    return (
      <div>
        <Header
          isListVisable={this.state.isListVisable}
          onToggleList={this.toggleList}
        />
        <Main isListVisable={this.state.isListVisable} />
      </div>
    );
  }
}

export default App;
