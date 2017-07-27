import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DressProducts from './dressProduct/dressProducts';




export function DisneyCollection( { dressProduct } ) {
    const dresses = dressProduct.map( (dress, index) => (
        <div key={dress.id}>
            <DressProducts image={dress.image} id={dress.id} />
        </div>

));
        return (
            <div>

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
