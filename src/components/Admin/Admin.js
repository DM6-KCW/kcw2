import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


import "./Admin.css";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: undefined,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.get('/api/login?username=' + this.user.value + '&password=' + this.pass.value )

            .then( response => {

            this.setState({loggedIn: response.data.answer},

                () => {
                    if (this.state.loggedIn) {
                        this.props.history.push('/adminPage')
                    }
                    else {
                        alert('wrong username or password idk either');
                        this.props.history.push('/admin');
                    }
            });
        })


    }

    render() {
        return (

            <div className="admin-container">
                    <div className="login-page">
                        <div className="login-form">
                            <form className="login-login-form"  onSubmit={this.handleSubmit}>

                                <input type="text" placeholder="username" ref={(user) => this.user = user} required/>
                                <input type="password" placeholder="password" ref={(pass) => this.pass = pass}
                                       maxLength="15" required/>

                                <button>login</button>
                            </form>
                        </div>
                    </div>
            </div>

        )
    }
}

export default withRouter(Admin);
