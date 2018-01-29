console.log("App.js esta corriendo whoo!");

//JSX JavaScript XML
//var template = <p>Esto es JSX desde app.js</p>;

var template = React.createElement(
    "p",
    null,
    "Esto JSX dede app.js"
  );

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);