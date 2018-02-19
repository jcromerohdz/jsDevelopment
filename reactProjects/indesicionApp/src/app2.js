console.log("App.js esta corriendo whoo!");


var userName = "Christian";
var userAge  = "???";
var userLocation = "Tijuana"; 

//JSX JavaScript XML
var template = (
    <div>
        <h1>Nuevo</h1>
        <h1>Le agregue h1 a es Esto es JSX desde app.js funcionando</h1>
        <p>Otro cosa!</p>
        <ol>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
            <li>Cuatro</li>
            <li>Nuevo</li>
            <li>Mas Nuevo</li>        
        </ol>
    </div>);

    var templateDos = (
        <div>
            <h1>Nombre:{userName}</h1>     
            <p>Edad:{UserAge}</p>
            <p>Ciudad:{UserLocation}</p>
        </div>);

var appRoot = document.getElementById("app");

ReactDOM.render(templateDos, appRoot);