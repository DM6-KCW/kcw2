import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Posts from './Posts/posts'

import Footer from '../Footer/Footer.js';

import "./Blog.css";

import fullLogo from '../../images/full-logo.png';


export function Blog( { blogs } ) {
    // console.log(blogs);
    // const postage = blogs.map( (post, index) => {
    //     <div key={post.id}>
    //         <Posts image={post.image} id={post.id} />
    //     </div>
    // })

        return (
            <div>
                <div id="blogcontainer">
                    <div id="postcontainer">
                        <div id="blogtitle">
                            Mithi says stuff to people
                        </div>
                        <div className="blogposts">
                         <Posts/>
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
                                    <a href=""><i className="fa fa-twitter fa-lg" aria-hidden="true"></i>@mithikalra</a>
                                </div>
                                <div id="blogsocialinsta">
                                    <a href="https://www.instagram.com/mithikalra/"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i>mithikalra</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )

}

function mapStateToProps( {post}){
    return { posts: post}
}


export default connect( mapStateToProps, { }) (Blog);
