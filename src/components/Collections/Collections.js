import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Collection1 from './collection1/collection1';
import Collection2 from './collection2/collection2';

import "./Collections.css";

class Collections extends Component {
    render() {
        return (
            <div>
                <div className="collections">
                    Collections
                </div>

                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-5">
                        <Collection1 />
                    </div>
                    <div className="col-sm-5">
                        <Collection2 />
                    </div>
                </div>
            </div>
        )
    }
}

export default Collections;
