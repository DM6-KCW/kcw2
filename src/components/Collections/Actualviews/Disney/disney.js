import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DressProducts from './dressProduct/dressProducts';

import './disney.css';


export function DisneyCollection( { dressProduct } ) {
    const dresses = dressProduct.map( (dress, index) => (
        <div key={dress.id}>
            <DressProducts image={dress.image} id={dress.id} />
        </div>

));
        return (
            <div id="dPage">
                <header id="dDresses">
                     <h1>Disney dresses</h1>
                </header>
                <hr/>

                 <div id="dContainer">
                     { dresses }
                 </div>


            </div>
        )

}

function mapStateToProps( { dresses }) {
    return { dressProduct: dresses.dresses}
}
export default connect( mapStateToProps, { }) (DisneyCollection);
