import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import "./Media.css";
class Media extends Component {

    constructor() {
        super();
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
                                            <a href={postage.link} target="_blank">
                                                <div id="postimgbox">
                                                    <img id="postimg" src={postage.imgurl} />
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
