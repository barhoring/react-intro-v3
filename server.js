require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const App = require('./js/App').default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const server = express();

// staticlly serve everything that is in the public dir, like: css, images bundle.js etc.
server.use('/public', express.static('./public'));

server.use((req, res) => {
    console.log(req);
    let context = {};
    const body = ReactDOMServer.renderToString(
        React.createElement(StaticRouter, { location: req.url, context},
            React.createElement(App)
        );
    );

    if(context.url){
        res.redirect(context.url);
    }

    res.write(template, { body });
    res.end();
});

console.log(`listening on ${port}`);
server.listen(port);
