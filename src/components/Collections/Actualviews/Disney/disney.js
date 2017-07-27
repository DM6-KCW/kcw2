import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import dressProducts from '../dressProduct/dressProducts';




export function DisneyCollection( { dressProduct } ) {
    const dresses = dressProduct.map( (dress, index) => {
        <dressProducts
            key={index * Math.random() * 10}
            image={dress.image}
            />
    });

        return (
            <div>
                {console.log(dresses)}

               <h1>Disney dresses</h1>

                <div>
                    {dresses}
                </div>
            </div>
        )

}

function mapStateToProps( { dresses }) {
    return { dressProduct: dresses}
}
export default connect( mapStateToProps, { }) (DisneyCollection);
