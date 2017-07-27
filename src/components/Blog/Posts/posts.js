import React, {PropTypes}from 'react';
import './posts.css';
import testimg from "../../../images/FB_IMG_1500476073426[124].jpg";



export default function posts({id, image}) {

        return (
            <div>
                <div id="post">
                    <div id="posttitle">
                        Summery shimmer where they do stuff together in the sun with cats
                    </div>
                    <div id="postdate">

                    </div>
                    <div id="postimgbox">
                        <img id="postimg" src={image}/>
                    </div>
                    <div id="posttext">
                        eyyy this is a good time heres to the future where we do more stuff like this eyyy lmao how do i turn this off?
                    </div>
                </div>



            </div>
        )


}

posts.propTypes = {
    image: PropTypes.string.isRequired
};
