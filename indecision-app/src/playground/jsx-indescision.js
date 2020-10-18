console.log('App.js is running');

//JSX - JavaScript XML

const app ={
    title:'Indcision App',
    subtitle:'substitle',
    options:[]
};

const onFormSubmit = (e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
    }
};

const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random()* app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
}
const appRoot = document.getElementById('app');




const removeAll = ()=>{
    app.options = [];
    renderForm() ;
    console.log(app.options.length)
};

const renderForm = ()=>{
    const template =(
        <div> 
            <h1>{app.title}</h1>
            {app.subtitle && <p> Subtitle: {app.subtitle}</p>}
           <p>{app.options.length > 0? 'Here are your options':'No options'}</p>
           <p>{app.options.length}</p> 
           <button onClick={removeAll}>Remove All</button>
           <button disabled ={app.options.length ===0} onClick={onMakeDecision}>What Should i do? </button>
           <ol>
           {
               app.options.map((option) =>{
                   return <li key ={option}>{option}</li>
               })
           }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

renderForm();