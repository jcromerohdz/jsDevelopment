class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOptions(){
        this.setState(() =>{
            return{
                options:[]
            };
        });
    }
    // hadlePick - randomly pick an option and alert it

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(randomNum);
         alert(option);
    }

    handleAddOption(option){
        // console.log(option);
        if (!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This item already exists';
        }

        this.setState((prevState) =>{
            return{
                options: prevState.options.concat([option])
            };
        });
    }
    render(){
        const title = 'Indecision';
        const subtitle = '!!Put your life in the hands of a computer';
        // const options = ['Option one', 'Option two', 'Option three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                   hasOptions={this.state.options.length > 0}
                   handlePick={this.handlePick}
                />
                <Options 
                   options={this.state.options}
                   handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                
                />
            </div>
        );
    }
}

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

// class Header extends React.Component{
    
//     render(){
//         // console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) =>{
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
                 What should I do?
            </button>
        </div>
    );
};

// class Action extends React.Component{
    
    // handlePick(){
    //     alert('handlePick');
    // }

//     render(){
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                      What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) =>{
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {
                // this.props.options.map((option) => <p key={option}>option: {option}</p>)
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
        </div>
    );
}

// class Options extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>

//                 {
//                     // this.props.options.map((option) => <p key={option}>option: {option}</p>)
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }
        
                
           
//             </div>
//         );
//     }
// }

const Option = (props) =>{
    return (
        <div>
            <p>{props.optionText}</p>
       </div>
    );
}

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//            </div>
//         );
//     }
// }

//Generar un componente llamado option que este dentro de options

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption =this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() =>{
            return{
                error : error
            };
        });

        if (option){
            //app.options.push(option);
            //e.target.elements.option.value = '';
            // this.props.handleAddOption(option);
            // alert(option);
        }

    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form> 

            </div>
        );
    }
}

// const User = (props) =>{
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));