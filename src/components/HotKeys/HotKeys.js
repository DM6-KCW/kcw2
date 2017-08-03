// import {HotKeys} from 'react-hotkeys';
//
//
// const map = {
//     'goToAdmin': 'command+shift+a'
// };
//
// const
import React, {Component} from 'react'
import {HotKeys, HotKeyMapMixin} from 'react-hotkeys';
import {withRouter} from 'react-router-dom';
import Home from '../Home/Home'
import Admin from '../Admin/Admin'

const handlers = {
    'deleteNode': (event) => console.log("Delete"),
    'moveUp': (event) => console.log('Move up hotkey called!'),
};

const keyMap = {
    'redirect': 'shift+a'
};

const HotKey = React.createClass({
    getInitialState() {
        return {admin: false, handlers: {'redirect': () => this.props.history.push('/admin')}}
    },

    render() {
        return (
            <HotKeys keyMap={keyMap} handlers={this.state.handlers}>
                <Home />
            </HotKeys>
        )
    }
});

export default withRouter(HotKey);


