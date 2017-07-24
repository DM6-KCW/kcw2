import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Collection1 from './collection/collection1/collection1';
import Collection2 from './collection/collection2/collection2';

import "./Collections.css";

class Collections extends Component {
    render() {
        return (
            <div>
                Collections


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
