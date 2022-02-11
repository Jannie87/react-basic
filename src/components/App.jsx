import { Component } from "react";
import Button from "./button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#333'
    }
  }

  // toogleBackgorundColor=() => {
  //   if(this.state.backgroundColor === '#333') {
  //     this.setState({backgroundColor: 'blue'});
  //   } else {
  //     this.setState ({backgroundColor: '#333'})
  //   }
  // }

  toogleBackgorundColor=() => {
      this.setState({backgroundColor: this.state.backgroundColor === '#333' ? 'blue' : '#333'});
    }


  render(){
    return (
      <div style={{ 
       background: this.state.backgroundColor,
       height: '100vh' 
       }}>
      
      <Button onClick={this.toogleBackgorundColor}>
    Toggle background!
      </Button>
     
      </div>
    );

  }
}

export default App;
