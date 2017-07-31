import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './moonlight.css';

class Moonlight extends Component {

    constructor(){
        super();

        this.state = {
            dresses: []
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    componentDidMount(){
        var self = this;
        axios.get('/api/moonlightCollection').then(function(response){
            self.setState({'dresses': response.data})
        })
    }

    handleMouseOver(e) {
        if(this.state.dresses[e.target.id-1].back_img_url){
            e.target.src = this.state.dresses[e.target.id-1].back_img_url;
        }
    }

    handleMouseOut(e) {
        if(this.state.dresses[e.target.id-1].back_img_url){
            e.target.src = this.state.dresses[e.target.id-1].img_url;
        }
    }


    render(){
        console.log(this.state);
        var self = this;
        return (
            <div>
                <div className = "dressContainer">
                {this.state.dresses.map(function(dresses) {
                         return (
                            <div className="container">
                                <img onMouseOver={self.handleMouseOver} onMouseOut={self.handleMouseOut} src={dresses.img_url} id={dresses.dress_id} className="image" />
                                <Link to={"/moonlight/"+dresses.dress_id}>
                                        <div className="overlay">
                                            <div className="text">Price Request</div>
                                        </div>
                                </Link>
                            </div>
                          );
                    })}
                </div>
            </div>
        )
    }
}

export default Moonlight;
