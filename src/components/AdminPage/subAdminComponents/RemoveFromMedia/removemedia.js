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
                <h3 id="removemediatitle">Remove Media</h3>
                <div className="">
                 {this.state.postage.map(function(postage){
                     return (

                         <div className="row">

                             <Link to={"/post/" + postage.link}>
                                 <div className="col-xs-3" id="removedescription">
                                         {postage.description}
                                 </div>
                             </Link>

                                 <div className="col-xs-3" id="removelink">
                                        <img src={postage.imgurl} alt="media image" height="50px" width="60px" />
                                 </div>




                                    <div className="col-xs-3 medialink">
                                        {postage.link}
                                    </div>




                                <div className="col-xs-3">
                                     <button
                                        type="button"
                                        className="btn btn-danger btnm"
                                        id={postage.id}

                                        onClick={(e) => self.handleClick(e)}>
                                        delete above post
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
