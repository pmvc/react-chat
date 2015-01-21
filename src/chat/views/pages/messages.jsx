var React = require('react');
var Buttons = require('react-atomic-ui/ui/molecules/buttons');
var Button = require('react-atomic-ui/ui/molecules/button');
var Or = require('react-atomic-ui/ui/molecules/or_button');
var InputBox = require('react-atomic-ui/ui/molecules/inputbox');
var InputUI = require('react-atomic-ui/ui/molecules/input_ui');
var List = require('react-atomic-ui/ui/molecules/list');
var SemanticUI = require('react-atomic-ui/ui/molecules/semantic_ui');
var AtomDiv = require('react-atomic-ui/ui/atoms/div');

var sendMessage = require('../actions/send_message');


var MessageStore = require('../../stores/MessageStore');
var StoreMixin = require('fluxible').StoreMixin;



var Template =  React.createClass({
    render: function(){
        return (
          <AtomDiv>
            {this.props.view}
          </AtomDiv>
        )
    }
});


module.exports = React.createClass({
    displayName: 'ReactAtomicUIDoc',
    mixins: [StoreMixin],
    statics: {
        storeListeners: {
            onChange: [MessageStore]
        }
    },
    getInitialState: function(){
        return ({
            template: null,
            messages: []
        });
    },
    render: function(){
        return (
            <SemanticUI>
              <List>
                
              </List>
              <InputUI>
                <InputBox ui={false} type="text" placeholder="Search..." onChange={this.handleInput} />
                <Button onClick={this.handleSend}>Go</Button>
              </InputUI>
            </SemanticUI>
        );  
    },
    onChange: function(){
        this.setState({
            messages:his.getStore(MessageStore).getAll() 
        });    
    },
    handleInput: function(e){
         this.setState({text: e.target.value}); 
    },
    handleSend: function(e){
       var text = this.state.text.trim();
        if (text) {
            this.props.context.executeAction(sendMessage, {
                text: text
            }); 
        }
    }      
});
