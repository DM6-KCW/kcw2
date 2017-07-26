import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import "./Admin.css";

class Brand extends Component {
    render() {
        return (
            
            <div className="admin-container">
                    <div className="login-page">
                        <div className="login-form">
                            <form className="login-login-form">
                                <input type="text" placeholder="username"/>
                                <input type="password" placeholder="password"/>
                                <button>login</button>
                            </form>
                        </div>
                    </div>
            </div>

        )
    }
}

export default Brand;
