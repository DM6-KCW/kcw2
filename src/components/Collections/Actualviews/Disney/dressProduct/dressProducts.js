import React, {PropTypes} from 'react';

import {Link} from 'react-router-dom';

export default function dressProduct( { id, image } ) {


    return (
        <div>
            <div id="dressContainer">
                <Link to="/contact">

                         <img className="dImage" src={ image } alt="dresses" height="400px" width="250"/>

                </Link>
            </div>

        </div>
    )
}

dressProduct.propTypes = {

    image: PropTypes.string.isRequired

};