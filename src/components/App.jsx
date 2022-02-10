import { Component } from "react";
import Button from "./button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#333'
    }
  }

  toogleBackgorundColor=() => {
    this.setState({backgroundColor: 'green'});

  }
  render(){
    return (
      <div style={{ 
       background: this.state.backgroundColor,
       height: '100vh' 
       }}>
      
      <Button onClick={this.toogleBackgorundColor}>
      Try here!!
      </Button>
     
      </div>
    );

  }
}

export default App;
