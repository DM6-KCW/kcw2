import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

export default function dressProduct( { id, image } ) {

    return (
        <div>
            <div className="wrapper">
                <img src={image} alt="dresses"/>
                {id}
            </div>
            <div>
                <button>
                </button>
            </div>
        </div>
    )
}

dressProduct.propTypes = {

    image: PropTypes.string.isRequired

};