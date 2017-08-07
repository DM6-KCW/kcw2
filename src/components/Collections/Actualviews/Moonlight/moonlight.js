import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import fullLogo from '../../../../images/full-logo.png';
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
        if(this.state.dresses[e.target.id-11].back_img_url){
            e.target.src = this.state.dresses[e.target.id-11].back_img_url;
        }
    }

    handleMouseOut(e) {
        if(this.state.dresses[e.target.id-11].back_img_url){
            e.target.src = this.state.dresses[e.target.id-11].img_url;
        }
    }


    render(){
        var self = this;
        return (
            <div className="text-center">
                <div className="img-logo-collections">
                    <img className="full-logo" src={fullLogo} alt=""/>
                </div>
                <h1 className="collection-name">The Moonlight Collection</h1>
                <div className="collection-description">
                    <p>The Moonlight collection is inspired from different phases of moon
                        structured in cotton chanderi fabric. Chanderi being a traditional
                        ethnic Indian fabric is characterized by its light weight, sheer
                        texture and fine luxurious feel.</p>
                    <p>Designs of the Moonlight Collection are seen surfacing the stage in
                        flattering cuts at the neck and mid-section, right from short party
                        dresses to flowy ball gowns to the full-length cocktail dresses, she
                        has given white a whole new definition all together and with summer
                        around, it feels like a soothing balm to the eyes. For the show stopper
                        dress, retainng the undeniable grandeur of black, giving her
                        'spotlight design' the spark it demands. The princess gown is a vision
                        in black, perfect for any formal occasion, with all the glam and glitter
                        it could have had in just the right places; with bold low cut frame at the
                        back and a very unique classy front-cut, it promises to bring emphasis
                        to those envious body curves the way any woman would dream of.</p>
                </div>
                <div className = "dressContainer">
                {this.state.dresses.map(function(dresses) {
                         return (
                            <div className="container">
                                <img alt="" onMouseOver={self.handleMouseOver} onMouseOut={self.handleMouseOut} src={dresses.img_url} id={dresses.dress_id} className="image" />
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
