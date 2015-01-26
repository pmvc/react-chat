'use strict';
var React = require('react');
var AtomDiv = require('react-atomic-ui/ui/'+
    'atoms/div.jsx');
var FacebookButton = require('react-atomic-ui/ui/'+
    'molecules/facebook_button.jsx');

        document.addEventListener("intel.xdk.facebook.login",function(e){ 
           if (e.success == true) 
           { 
             console.log("Facebook Log in Successful"); 
           } 
           else
           { 
             console.log("Unsuccessful Login"); 
           } 
         },false); 

module.exports=React.createClass({
    displayName: 'LoginView',
    render: function() {
        return (
            <AtomDiv>
                <FacebookButton onClick={this.handleClickLogin}>Login as Facebook</FacebookButton>
            </AtomDiv>
        );
    },
    handleClickLogin: function(){
        intel.xdk.facebook.login("publish_stream,publish_actions,offline_access"); 
        console.log(intel.xdk);
    }
});
