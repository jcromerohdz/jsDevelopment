import React from "react";
import {Meteor} from "meteor/meteor";
import {render} from 'react-dom';
import { ApolloProvider} from 'react-apollo';
import { ApolloLink, from } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';



// const App = () => <h1>Hello</h1>;

import App from "../../ui/App";

//Conexiones con apollo
const httplink = new HttpLink({
    uri: Meteor.absoluteUrl("graphql")
});

const authLink = new ApolloLink((operation, forward) => {
    const token = Accounts._storedLoginToken();
    operation.setContext(() => ({
        headers:{
            "meteor-login-token": token,
        }
    }));
    return forward(operation);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: from([authLink, httplink]),
    cache
});

const ApolloApp = () => (
    <ApolloProvider client={ client }> 
        <App />
    </ApolloProvider>
)



Meteor.startup(() => {
    render(<ApolloApp />, document.getElementById('app'))
});
