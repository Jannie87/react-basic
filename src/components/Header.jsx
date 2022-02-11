import Button from "./Button";
import "./header.css";

function Header(props) {
  return (
    <header>
      <h1>Cars</h1>
      <Button onClick={props.onToggleList}>
        {props.isListVisable ? "Dölj" : "Visa"}{" "}
      </Button>
    </header>
  );
}

export default Header;
