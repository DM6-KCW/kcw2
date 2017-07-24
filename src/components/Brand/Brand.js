import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Designer from '../Designer/Designer';

import "./Brand.css";

class Brand extends Component {
    render() {
        return (
            <div>
                brand page
                <Designer />
            </div>
        )
    }
}

export default Brand;
