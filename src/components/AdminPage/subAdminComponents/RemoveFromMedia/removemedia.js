import React, {Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import './removemedia.css';

class RemoveBlog extends Component {

    constructor(){
        super();

        this.state = {
            postage: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log(e.target.id);

        let answer = window.confirm('are you sure you want to permantetly delete this me? ' + e.target.id);

        if(answer){
            //delete the blog
            axios.delete('/api/blogs/delete/'+ e.target.id)
        }
        else{
            //dont delte the blog
        }
    }
    componentDidMount(){
        var self = this;
        axios.get('/api/allblogs').then(function(response){
            self.setState({'postage': response.data})
        })
    }

    render() {
        var self = this;
        return (
            <div>
                Remove Media
            <div id="postcontainer">
                <div className="blogposts">
                 {this.state.postage.map(function(postage){
                     return (
                         <div>
                         <Link to={"/post/"+postage.blog_id}>
                             <div id="post">
                                 <div id="posttitle">
                                     {postage.title}
                                 </div>
                                 <div id="postdate">
                                     {postage.posttime}
                                 </div>
                             </div>
                             </Link>

                             <button
                                type="button"
             					className="btn btn-danger"
                                id={postage.blog_id}

             	                onClick={(e) => self.handleClick(e)}>
             					delete above post
             				</button>
                         </div>
                     )
                 })}
                </div>
            </div>
            </div>
        )
    }
}

export default RemoveBlog;
