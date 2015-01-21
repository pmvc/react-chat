/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var createStore = require('fluxible/utils/createStore');

var MessageStore = createStore({
    storeName: 'MessageStore',
    handlers: {
        'RECEIVE_MESSAGES': 'receiveMessages'
    },
    initialize: function (dispatcher) {
        this.messages = {};
        this.sortedByDate = [];
    },
    receiveMessages: function (messages) {
        self.emitChange();
    },
    getAll: function () {
        return this.messages;
    },
    get: function (id) {
        return this.messages[id];
    },
    dehydrate: function () {
        return {
            messages: this.messages,
            sortedByDate: this.sortedByDate
        };
    },
    rehydrate: function (state) {
        this.messages = state.messages;
        this.sortedByDate = state.sortedByDate;
    }
});


module.exports = MessageStore;
