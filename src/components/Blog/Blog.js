import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Posts from './Posts/posts'

import "./Blog.css";
import "./Posts/posts.css"
import fullLogo from '../../images/full-logo.png';


class Blog extends Component{

    constructor(){
        super();

        this.state = {
            postage: []
        }
    }

    componentDidMount(){
        var self = this;
        axios.get('/api/blogs').then(function(response){
            self.setState({'postage': response.data})
        })
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <div id="blogcontainer">
                    <div id="postcontainer">
                        <div id="blogtitle">
                            Mithi says stuff to people
                        </div>
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
                                            <div id="postimgbox">
                                                <img id="postimg" src={postage.img_url}/>
                                            </div>
                                            <div id="posttext">
                                                {postage.posttext}
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                             )
                         })}
                        </div>
                        <div className="blognavigation">
                            <Link to="older">
                                <button>
                                    older posts...
                                </button>
                            </Link>
                        </div>
                    </div>



                    <div id="blogsidebar">
                        <div id="blogheadshot">
                        <img id="blogheadshotimg" src={fullLogo} alt=""/>
                        </div>
                        <div id="blogsideabout">
                            about
                            MITHI KALRA an MBA from IIPM and a pass out from NIFT Delhi 2015 with her label name ‘Mithi Kalra’ she follows her dream and passion to create the beautiful apparels for every age group. 

                        </div>
                        <div id="blogsidesocial">
                            social media
                            <div id="blogsocials">
                                <div id="blogsocialface">
                                    <a href="https://www.facebook.com/MithikalraFashion/"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i>MithikalraFashion</a>
                                </div>
                                <div id="blogsocialtwit">
                                    <a href="https://twitter.com/mithikalra?lang=en"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i>@mithikalra</a>
                                </div>
                                <div id="blogsocialinsta">
                                    <a href="https://www.instagram.com/mithikalra/"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i>mithikalra</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }




}

export default Blog;



// export function Blog( {blogs}) {
//     console.log(blogs);
//     const postage = blogs.map( (post, index) => (
//         <div key={post.id}>
//             <Posts image={post.image} id={post.id} title={post.title} date={post.date} text={post.text} />
//         </div>
//     ))
//
//         return (
//             <div>
//                 <div id="blogcontainer">
//                     <div id="postcontainer">
//                         <div id="blogtitle">
//                             Mithi says stuff to people
//                         </div>
//                         <div className="blogposts">
//                          {postage}
//                         </div>
//                     </div>
//                     <div id="blogsidebar">
//                         <div id="blogheadshot">
//                         <img id="blogheadshotimg" src={fullLogo} alt=""/>
//                         </div>
//                         <div id="blogsideabout">
//                             about
//                             MITHI KALRA an MBA from IIPM and a pass out from NIFT Delhi 2015 with her label name ‘Mithi Kalra’ she follows her dream and passion to create the beautiful apparels for every age group. 
//
//                         </div>
//                         <div id="blogsidesocial">
//                             social media
//                             <div id="blogsocials">
//                                 <div id="blogsocialface">
//                                     <a href="https://www.facebook.com/MithikalraFashion/"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i>MithikalraFashion</a>
//                                 </div>
//                                 <div id="blogsocialtwit">
//                                     <a href=""><i className="fa fa-twitter fa-lg" aria-hidden="true"></i>@mithikalra</a>
//                                 </div>
//                                 <div id="blogsocialinsta">
//                                     <a href="https://www.instagram.com/mithikalra/"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i>mithikalra</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//             </div>
//         )
//
// }

// function mapStateToProps( {blogs}){
//     return { blogs: blogs.blogs}
// }
//
//
// export default connect( mapStateToProps, { }) (Blog);
