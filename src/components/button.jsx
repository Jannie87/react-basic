function Button(props) {
    return (
        <button style={rootStyle} onClick={props.onClick}>Click me!</button>
    ) 
}

const rootStyle = {
    backgorund:'lightblue'
}


export default Button;