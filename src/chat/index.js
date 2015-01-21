var React = require('react');
var FluxibleApp = require('fluxible');

var app = new FluxibleApp({
    appComponent: React.createFactory(require('./views/pages/welcome'))
});

app.registerStore(require('./stores/MessageStore'));
module.exports = app;

