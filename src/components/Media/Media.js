import React, {Component} from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';


import "./Media.css";
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
        return (
            <div id="media">
                <div id="title">
                    <h2 id="press">
                        PRESS
                    </h2>
                    <hr />
                </div>
                <div className="pressContain">
                    {this.state.postage.map(function(postage){
                        return (
                            <div>
                                <div className="pressBox">
                                    <a href={postage.link}>
                                        <div id="mediaimgbox">
                                            <img id="mediaimg" alt='' src={postage.imgurl}/>
                                        </div>
                                        <div id="mediaDescriptionbox">
                                            {postage.description}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Media;
