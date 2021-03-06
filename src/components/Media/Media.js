import React, {Component} from 'react';
import axios from 'axios';


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
        return (
            <div id="media">
                <div id="title">
                    <h2 id="press">
                        MEDIA
                    </h2>
                    <hr />
                </div>
                <div className="pressContain">

                    {this.state.postage.map(function(postage){
                        return (
                            <div>
                                <div className="pressBox">
                                    <a href={postage.link} target="_blank">
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
