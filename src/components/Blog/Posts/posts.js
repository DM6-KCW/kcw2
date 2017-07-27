import React, {Component} from 'react';

import './posts.css';
import testimg from "../../../images/FB_IMG_1500476073426[124].jpg";
class Posts extends Component {
    //figure out how to do ng-repeat in react here
    render(){
        return (
            <div>
                <div id="post">
                    <div id="posttitle">
                        Summery shimmer where they do stuff together in the sun with cats
                    </div>
                    <div id="postdate">
                        Summer 2012
                    </div>
                    <div id="postimgbox">
                        <img id="postimg" src={testimg}/>
                    </div>
                    <div id="posttext">
                        eyyy this is a good time heres to the future where we do more stuff like this eyyy lmao how do i turn this off?
                    </div>
                </div>
            </div>
        )
    }

}

export default Posts;
