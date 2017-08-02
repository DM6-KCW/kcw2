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
                    <div className="form-group">
                        <label for="exampleInputFile">File input</label>
                        <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                            <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleTextarea">Example textarea</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3">hello</textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddToMedia