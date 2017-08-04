import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

import './removeblog.css';

class RemoveBlog extends Component {

    constructor() {
        super();

        this.state = {
            postage: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let answer = window.confirm('are you sure you want to permantetly delete this blog? ' + e.target.id);
        var self = this;
        if (answer) {
            //delete the blog
            axios.delete('/api/blogs/delete/' + e.target.id).then(function (response) {
                axios.get('/api/allblogs').then(function (response) {
                    self.setState({'postage': response.data})
                })
            })

        }
        else {
            //dont delte the blog
        }
    }

    componentDidMount() {
        var self = this;
        axios.get('/api/allblogs').then(function (response) {
            self.setState({'postage': response.data})
        })
    }

    render() {

        var self = this;

        return (
            <div>
                <h3 id="blogstitle">Remove blogs From Page</h3>

                    <div>
                        {this.state.postage.map(function (postage) {
                            return (

                                    <div className="row">

                                        <Link to={"/post/" + postage.blog_id}>
                                            <div className="col-sm-4" id="blogtitles">
                                                {postage.title}
                                            </div>
                                        </Link>

                                        <div className="col-sm-4" id="postdate">
                                            Date Created: {postage.posttime}
                                        </div>

                                        <div className="col-sm-4">

                                            <button
                                                type="button"
                                                className="btn btn-danger btnb"
                                                id={postage.blog_id}

                                                onClick={(e) => self.handleClick(e)}>
                                                Delete Post
                                            </button>

                                        </div>

                                    </div>
                            )
                        })}
                    </div>
                </div>
        )
    }
}

export default RemoveBlog;
