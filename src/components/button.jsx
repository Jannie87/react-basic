function Button(props) {
  return (
    <button style={rootStyle} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

const rootStyle = {
  background: "lightblue",
  borderRadius: "100rem",
  padding: "0.5rem 1rem",
  border: "none",
};

export default Button;
