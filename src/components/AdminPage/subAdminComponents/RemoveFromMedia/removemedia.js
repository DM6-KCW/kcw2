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
        let answer = window.confirm('are you sure you want to permanently delete this media? ' + e.target.id);
        var self = this;
        if(answer){
            //delete the blog
            axios.delete('/api/media/delete/'+ e.target.id).then(function(response){
                axios.get('/api/allmedia').then(function(response) {
                    self.setState({'postage': response.data})
                })
            })
        }
        else{
            //dont delte the blog
        }
    }
    componentDidMount(){
        var self = this;
        axios.get('/api/allmedia').then(function(response){
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

                             <div id="post">
                                 <div id="posttitle">
                                     {postage.description}
                                 </div>
                                 <div id="deletemediaimgurl">
                                    image url: {postage.imgurl}
                                 </div>
                                 <div id="deletemedialink">
                                    links to: {postage.link}
                                 </div>
                             </div>


                             <button
                                type="button"
             					className="btn btn-danger"
                                id={postage.id}

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
