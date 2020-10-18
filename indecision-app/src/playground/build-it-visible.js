

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibility:false
        };
    }

    handleToggleVisibility(){
        this.setState((previousState)=>{
            return {
                visibility: previousState.visibility = !previousState.visibility
            };
        })
    }
    render(){
        return(
         <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility == true? 'Hide Details':'Show Details'}</button>
            {this.state.visibility && (
            <div>
                <p>Show details</p>
            </div>
            )}
         </div>

        );
    }
}
class Detail extends React.Component{

    render(){
        return (
            <div>
                <p> ALl the details should show in here</p>
            </div>
        )

        
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



/*
let show = 'Show Details';
let hide = 'Hide Details';
let showHide = true;
const display = ()=>{
    showHide = !showHide;
    render();
    console.log(showHide);
}

const details = 'here is where all the details are going'

const render=()=>{

    const template = (

        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={display}> {showHide == true? show:hide}</button>
        <p>{showHide == true? details: ""}</p>
        </div>
    );
    ReactDOM.render(template,appRoot);

}


const appRoot = document.getElementById('app');
render();
 */