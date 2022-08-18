import React,{Component} from "react";

class App extends Component{

constructor(props){
    super(props);

    this.state = {
        displayName: "",
        name: "",
    }
}

handleChange = evt => {
    this.setState ({
        name: evt.target.value
    });
};

handleClick = evt =>{
    this.setState({
        displayName: this.state.name
    });
};

render(){
    return (
        <>
            <h1>welcome {this.state.displayName}</h1>
            <input value = {this.state.name} onChange={this.handleChange} />
            <button onClick={this.handleClick}>change name</button>

        </>
    );
}
}

export default App;
