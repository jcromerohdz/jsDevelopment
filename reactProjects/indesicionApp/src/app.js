console.log("App.js esta corriendo whoo!");

var userName = "Christian";
var userAge  = "???";
var userLocation = "Tijuana"; 

var user = {
    name:"Christian",
    age: 17,
    location:"Tijuana"
};

function getLocation(location){
    if(location){
        return <p>Ciudad:{location}</p>;
    }else{
        return 'Unknown';
    }
}

let count = 0;
const addOne = () =>{
    count++;
    // console.log('addOne');
    renderCounterApp();
};

const minusOne = () =>{
    count--;
    // console.log('minusOne');
    renderCounterApp();
}

const reset = () =>{
    count = 0;
    renderCounterApp();
    // console.log('reset');
}

//JSX JavaScript XML
const templateDos = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>     
        {user.age >= 18 && <p>Edad:{user.age}</p>}
        {getLocation(user.location)}
    </div>);

const appRoot = document.getElementById("app");

//ReactDOM.render(template, appRoot);

const renderCounterApp = () =>{
    const template = (
        <div>
         <h1>Count: {count}</h1>
         <button onClick={addOne}>+1</button>
         <button onClick={minusOne}>-1</button>
         <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderCounterApp();