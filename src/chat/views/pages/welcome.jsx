
'use strict';
var React = require('react');
var Messages = require('../pages/messages.jsx');
module.exports=React.createClass({
    displayName: 'Welcome',
    render: function() {
        return (
            <Messages {...this.props}/>
        );
    }
});
