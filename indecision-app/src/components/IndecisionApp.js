
import React from 'react';

import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOption: undefined
    };
    handleClearSelectedOption = () =>{
        this.setState( () => ({
            selectedOption: undefined
        }))
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((previousState =>({
            options: previousState.options.filter((option) => optionToRemove !== option)
        
        })))
    };

    handlePick = () => {
        const randomOption = Math.floor((Math.random() * this.state.options.length));
        const option = this.state.options[randomOption]
        //
        this.setState(() =>({
            selectedOption:  option
        }))

    };
    handleAddOption = (option) => {

        if(!option){
            return 'Entre valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }else{

        }
        this.setState((previousState) =>({
            options: previousState.options.concat(option)

        }));
  
    };
    componentDidMount(){
        //get the stored item
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        }catch(e){
            // Do nothing at all
        }
 
    };
    componentDidUpdate(previousProps, previousState){
        // save data to local storage
        if(previousState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options);
           localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    };
    handleDeleteOptions = () => {
        this.setState(() => ({options:[] }));

    };


    
    render(){
        const subtitle = 'Put your life in the hands of computers'
        
        return (
            <div>
                <Header subtitle ={subtitle}/>
                <div className ='container'>
                
                <Action 
                hasOptions={this.state.options.length} 
                handlePick={this.handlePick}
                />
                <div className='widget'>
                    <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOptions 
                    handleAddOption={this.handleAddOption}
                
                    />
                </div>
                </div>

               
                <OptionModal
                selectedOption ={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    };
}

export default IndecisionApp;

