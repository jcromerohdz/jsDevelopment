import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state ={
        options:[],
        selectedOption: undefined
    }
    // constructor(props){
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     // this.state = {
    //     //     options: []
    //     // };
    // }

    //Life Cycle
    componentDidMount(){
        // const json = localStorage.getItem('options');
        // console.log(json);
        try{
            const json = localStorage.getItem('options');
            console.log(json);
            const options = JSON.parse(json);
            if (options){
                console.log("options");
                this.setState(() => ({options}));
            }
            
        }catch(e){
            //Do nothig at all
            console.log("Error");
        }
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            //localStorage.getItem('options');
            console.log("Saving data");
        }
        
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options:[]}));
    }
    //ReactDOM.render(React.createElement('p'), document.getElementById('app'));

    handleDeleteOption = (optionToRemove) =>{
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
        console.log('hdo', optionToRemove);
    }

    handlePick = () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // console.log(randomNum);
        // alert(option);
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption = (option) =>{
        if (!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This item already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer!';
        return (
            <div>
                <Header  subtitle={subtitle}/>
                <div className="container">
                    
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    
                </div>
                
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearModal = {this.handleClearSelectedOption} 
                />
            </div>
        );
    }
}
