import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


import "./Media.css";
import image from "../../images/FB_IMG_1500476060183[125].jpg";
import imageTwo from "../../images/FB_IMG_1500476073426[124].jpg";
import imageThree from "../../images/FB_IMG_1500475775897[120].jpg";

class Media extends Component {

    constructor() {
        super()
        this.state = {
            postage: []
        }
    }

    componentDidMount(){
        var self = this;
        axios.get('/api/allmedia').then(function(response){
            self.setState({'postage': response.data})
        })
    }

    render() {
        var self = this;
        return (
            <div id="media">
                <div id="title">
                    <h2 id="press">
                        PRESS
                    </h2>
                    <hr />
                </div>
                <div className="pressContain">
                    <div className="pressBox">
                        <div id="postcontainer">
                            <div className="blogposts">
                                {this.state.postage.map(function(postage){
                                    return (
                                        <div>
                                            <a href={postage.link}>
                                                <div id="postimgbox">
                                                    <img id="postimg" src={postage.imgurl}/>
                                                </div>
                                                <div>
                                                    {postage.description}
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Media;
