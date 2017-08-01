import React, {Component} from 'react'

import './AddToBlog.css';

class AddToBlog extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <form action="#" method="post" id="blogForm">
                    <h6>Title</h6>
                    <input type="text" maxLength="50" />
                    <input type="file" name="pic" accept="image/*"/>
                    <h6>Enter your post</h6>
                    <textarea cols="30" rows="10">Enter blog content here</textarea>

                    <input type="submit" value="Submit post" />
                </form>
            </div>
        )
    }
}

export default AddToBlog;