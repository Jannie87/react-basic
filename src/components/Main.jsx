import { Component } from "react";
import "./main.css";
import CarCard from "./CarCard";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: ["Legacy", "Impreza", "Outback", "Forester"] };
    //this state endast i constructor
  }

  render() {
    return (
      <main className="container">
        <div className="column">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            obcaecati quasi sunt nihil ipsa commodi autem. Facere neque harum
            sit dicta. Sapiente excepturi nihil quidem voluptatum corporis neque
            nemo illo?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            obcaecati quasi sunt nihil ipsa commodi autem. Facere neque harum
            sit dicta. Sapiente excepturi nihil quidem voluptatum corporis neque
            nemo illo?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            obcaecati quasi sunt nihil ipsa commodi autem. Facere neque harum
            sit dicta. Sapiente excepturi nihil quidem voluptatum corporis neque
            nemo illo?
          </p>
        </div>
        <div className="column">
          {this.props.isListVisable && (
            <ul className="card-container">
              {this.state.cars.map((car) => (
                <CarCard key={car}>{car}</CarCard>
              ))}
            </ul>
          )}
        </div>
      </main>
    );
  }
}

export default Main;
