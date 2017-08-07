import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import fullLogo from '../../../../images/full-logo.png';
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
        return (
            <div className="text-center">
                <div className="img-logo-collections">
                    <img className="full-logo" src={fullLogo} alt=""/>
                </div>
                <h1 className="collection-name">The Disney Collection</h1>
                <div className="collection-description">
                    <p>This is the first showcase of a young designer a NIFT pass out of 2015.</p>
                    <p>Mithi's exhibit named <i>The Indian Disney Story,</i>speaks for itself.
                        Dresses, gowns suited for a Princess, based on the traditional art of Madhubani,
                        hand embriodered on pure silks and organza. The collection wonderfully and
                        imaginatively combines the grace of a bygone era, with the modern day fashion.
                        Creatively designed gowns and dresses are certain to catch the imagination of
                        the young generation not only in India but the world over.</p>
                    <p>Madhubani painting is practiced in the Mithila state of Nepal and in the Bihar
                        state of India. Painting is done with the fingers, twigs, brushes, nib-pens,
                        and matchsticks, using natural dyes and pigments, and is characterized by
                        eye-catching geometrical patterns. There is ritual content for particular
                        occasions, such as birth of marriage, and festivals, such as Holi, Surya Shasti,
                        Kali Puja, Upanayanam, Durga Puja.</p>
                    <p>The Mithila region, from which the name Mithila art is derived, is believed
                        to have been the kingdom of King Janak in the present-day Janakpur in Nepal.</p>
                </div>
                <div className = "dressContainer">
                {this.state.dresses.map(function(dresses) {
                         return (
                            <div className="container">
                                <img src={dresses.img_url} alt="Avatar" className="image" />
                                <Link to={ "/disney/" + dresses.dress_id }>
                                        <div className="overlay">
                                            <div className="text"> Price Request </div>
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

export default Disney;
