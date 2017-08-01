import React, {Component} from 'react';

import './AddToMedia.css';

class AddToMedia extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <form action="" method="post">
                    <h4>Add Post to Media</h4>
                    <input type="file" name="pic" accept="image/*"/>
                    <h6>Add caption</h6>
                    <textarea cols="30" rows="10">Enter blog content here</textarea>                </form>
            </div>
        )
    }
}

export default AddToMedia