import React, {PropTypes}from 'react';
import './posts.css';
import testimg from "../../../images/FB_IMG_1500476073426[124].jpg";



export default function posts({id, image, title, date, text}) {

        return (
            <div>
                <div id="post">
                    <div id="posttitle">
                        {title}
                    </div>
                    <div id="postdate">
                        {date}
                    </div>
                    <div id="postimgbox">
                        <img id="postimg" src={image}/>
                    </div>
                    <div id="posttext">
                        {text}
                    </div>
                </div>



            </div>
        )


}

posts.propTypes = {
    image: PropTypes.string.isRequired
};
