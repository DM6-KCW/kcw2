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
                    <div className="form-group">
                        <label for="exampleInputEmail1">Enter Title Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleTextarea">Enter Content for blog</label>
                        <textarea className="form-control" id="exampleTextarea" rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit blog</button>

                </form>
            </div>
        )
    }
}

export default AddToBlog;