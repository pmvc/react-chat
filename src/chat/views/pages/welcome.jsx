'use strict';
var React = require('react');


var AtomDiv = require('react-atomic-ui/ui/'+
    'atoms/div.jsx');

var BottomSidebar = require('react-atomic-ui/ui/'+
    'molecules/bottom_sidebar.jsx');

var Item = require('react-atomic-ui/ui/'+
    'molecules/item.jsx');

var LoginView = require("../pages/login_view.jsx");




module.exports=React.createClass({
    displayName: 'Welcome',
    render: function() {
        var views = {
            login: <LoginView /> 
        };
        return (
            <AtomDiv>        
                {views.login}
                <BottomSidebar className="visible inverted nine overlay">
                    <Item>Login</Item>
                    <Item>Chat</Item>
                    <Item>Photo</Item>
                </BottomSidebar>
            </AtomDiv>
        );
    }
});
