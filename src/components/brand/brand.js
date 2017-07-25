import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Designer from '../designer/designer';

import "./brand.css";

class Brand extends Component {
    render() {
        return (
            <div className="brand-container">
                

                <div className="text-center">
                    <h1>BRAND</h1>
                    <h3>WHO WE ARE</h3>
                    <div className="pinch-margin">
                        <p>iLorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum
                        </p>
                    </div>



                </div>



                <Designer />
            </div>
        )
    }
}

export default Brand;
