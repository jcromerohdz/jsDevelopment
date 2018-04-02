class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    handleAddOne(){
        // alert('add one');
        // this.state.count += 1;
        this.setSate((prevState) =>{
            return{
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        // alert('minus one');
        this.setSate((prevState) =>{
            return{
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        // alert('reset');
        this.setSate(() =>{
            return{
                count: 0
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.hancleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count:0
};

ReactDOM.render(<Counter />, document.getElementById('app'));

