console.log("App_3.js esta corriendo whoo!");


//Forms and inputs
const app = {
    title: "Indecision App",
    subtitle: 'Put your life in the hands of a computer',
    options:['One', 'Two']
};

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value

    if (option){
        app.options.push(option);
    }
};

const onRemoveAll = () =>{
    app.optinons = [];
    render();
};

const appRoot = document.getElementById("app");

const render = () =>{
    const template = (
        <div>
            <h1>app.title</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove all</button> 
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>option: {option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="options" />
                <button>Add Options</button>
            </form> 
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};
render();