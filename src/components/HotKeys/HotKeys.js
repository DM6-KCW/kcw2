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
import Home from '../Home/Home';

const handlers = {
    'deleteNode': (event) => console.log("Delete"),
    'moveUp': (event) => console.log('Move up hotkey called!'),
};

const keyMap = {
    'redirect': 'shift+a',
    'adminpage': 'shift+h'
};

const HotKey = React.createClass({
    getInitialState() {
        return {admin: false, handlers: {'redirect': () => this.props.history.push('/admin'),
        'adminpage': () => this.props.history.push('/adminPage')}
        }
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


