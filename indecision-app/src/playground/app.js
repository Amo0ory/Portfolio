class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
            options:[]
        };
    }
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
 
    }
    componentDidUpdate(previousProps, previousState){
        // save data to local storage
        if(previousState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options);
           localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    handleDeleteOptions(){
        this.setState(() => ({options:[] }));

    }

    handleDeleteOption(optionToRemove){
        this.setState((previousState =>({
            options: previousState.options.filter((option) => optionToRemove !== option)
        
        })))
    }

    handlePick(){
        const randomOption = Math.floor((Math.random() * this.state.options.length));
        const option = this.state.options[randomOption]
        alert(option);

    }
    handleAddOption(option){

        if(!option){
            return 'Entre valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }else{

        }
        this.setState((previousState) =>({
            options: previousState.options.concat(option)

        }));
  
    }
    
    render(){
        const subtitle = 'Put your life in the hands of computers'
        
        return (
            <div>
                <Header subtitle ={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions 
                    handleAddOption={this.handleAddOption}
                
                />
            </div>
        );
    }
}


const Header =(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
Header.defaultProps ={
    title: 'Indecision'
};


const Action = (props)=>{

    return (
        <div>
        <button
         onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should i do?
        </button>
    </div>

    );
}

const Options = (props)=>{
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            props.options.map((option)=>(
                <Option 
                  key= {option} 
                  optionText ={option}
                  handleDeleteOption = {props.handleDeleteOption}
                
                />

            ))
        }
        </div>
    );
}

const Option = (props)=>{
    return (
        <div>
            {props.optionText}
            <button 
  
                onClick={() =>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
                
                Remove
            </button>
        </div>
    );
}

class AddOptions extends React.Component{
  constructor(props){
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
  }
  
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option);
        this.setState(()=>({error}));

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    
    render(){
        return (
            <div>
            {
                this.state.error && <p>{this.state.error}</p>
            }
                <form onSubmit={this.handleAddOption}>
                    <input type ='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const User= (props) =>{
    return(
        <div>
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
        </div>
    );
}
ReactDOM.render(<IndecisionApp  />,document.getElementById('app'))