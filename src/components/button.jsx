function Button(props) {
    return (
        <button style={rootStyle} onClick={props.onClick}> 
        {props.children}
        </button>
    ) 
}

const rootStyle = {
    background:'lightblue',
    borderRadius: '100rem'    
    
}


export default Button;