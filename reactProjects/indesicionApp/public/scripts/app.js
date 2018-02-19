"use strict";

console.log("App.js esta corriendo whoo!");

var userName = "Christian";
var userAge = "???";
var userLocation = "Tijuana";

var user = {
    name: "Christian",
    age: 17,
    location: "Tijuana"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Ciudad:",
            location
        );
    } else {
        return 'Unknown';
    }
}

var count = 0;
var addOne = function addOne() {
    count++;
    // console.log('addOne');
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    // console.log('minusOne');
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
    // console.log('reset');
};

//JSX JavaScript XML
var templateDos = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "Edad:",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

//ReactDOM.render(template, appRoot);

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );
    ReactDOM.render(template, appRoot);
};

renderCounterApp();
