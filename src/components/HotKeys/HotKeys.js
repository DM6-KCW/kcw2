// import {HotKeys} from 'react-hotkeys';
//
//
// const map = {
//     'goToAdmin': 'command+shift+a'
// };
//
// const
import React from 'react'
import {HotKeys} from 'react-hotkeys';
import {withRouter} from 'react-router-dom';
import Home from '../Home/Home'


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
