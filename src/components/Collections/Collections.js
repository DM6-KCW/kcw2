import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Collection1 from './collection1/collection1';
import Collection2 from './collection2/collection2';
// import Collection3 from './collection3/collection3';


import "./Collections.css";

class Collections extends Component {
    render() {
        return (
            <div>

                <div className="collections">
                    Collections
                </div>
                <div className="collectionsholder">
                    <Link to="/moonlight">
                        <div className="collection1">
                            <Collection1 />
                        </div>
                    </Link>
                    {/*<Link to="/collection3">*/}
                        {/*<div className="collection3">*/}
                            {/*<Collection3 />*/}
                        {/*</div>*/}
                    {/*</Link>*/}
                    <Link to="/disney">
                        <div className="collection2">
                            <Collection2 />
                        </div>
                    </Link>

                </div>
            </div>
        )
    }
}

export default Collections;
