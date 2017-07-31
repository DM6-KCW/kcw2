import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import DressProducts from './dressProduct/dressProducts';

import './disney.css';

class Disney extends Component {

    constructor(){
        super();

        this.state = {
            dresses: []
        }
    }

    componentDidMount(){
        var self = this;
        axios.get('/api/disneyCollection').then(function(response){
            self.setState({'dresses': response.data})
        })
    }


    render(){
        console.log(this.state);
        return (
            <div>
                <div className = "dressContainer">
                {this.state.dresses.map(function(dresses) {
                     return (
                         <Link to="/">
                            <div  className="dress" key={dresses.dress_id} >
                                <img  className="dress" src={dresses.img_url} alt=""/>
                            </div>
                        </Link>
                      );
                })}
                </div>
            </div>
        )
    }
}

export default Disney;


//
// export function DisneyCollection({dressProduct}) {
//
// 	const dresses = dressProduct.map((dress, index) => (
// 		<div key={dress.id}>
// 			<DressProducts image={dress.image} id={dress.id}/>
// 		</div>
//
// 	));
//
// 	return (
// 		<div id="dPage">
// 			<header id="dDresses">
// 				<h1>Disney dresses</h1>
// 			</header>
// 			<hr/>
//
// 			<div id="dContainer">
// 				{dresses}
// 			</div>
//
// 		</div>
// 	)
//
// }
//
// function mapStateToProps({dresses}) {
// 	return {dressProduct: dresses.dresses}
// }
// export default connect(mapStateToProps, {})(DisneyCollection);
