import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

import fullLogo from '../../images/full-logo.png'; 
class Home extends Component {
    constructor(){
        super(); 
        // this.homeAddScroll = this.homeAddScroll.bind(this); 
        // this.homeScrollListener = this.homeScrollListener.bind(this); 
        this.handleScroll = this.handleScroll.bind(this); 
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll); 
        setTimeout(() => {this.pAnimate2.style.color = '#0A0C26'}, 750); 
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll); 
    }
    handleScroll(e){
        var scrollPercent = (window.$(window).scrollTop()) / (window.$(document).height() - window.$(window).height());
        console.log(scrollPercent)
        if(scrollPercent > 0.12){
            this.pAnimate.style.color = 'black'
            window.$('#pAnimate').addClass('p-keyframe')
        }
    }
render() {

return (
<div className="home-container">
   <div className="sec-5">
      <div className="sec-5-back-img">
         <div className="text-center">
            <div className="sec-5-logo-container">
               <img className="sec-5-logo" src={fullLogo}></img>
            </div>
         </div>
      </div>
   </div>

   <div className="sec-2">
       
       <div className="k3-cont">
            <div className="k3">

            </div>
       </div>

      <div className="Latest-Collections">
          <div id="pAnimate2" ref={pAnimate2 =>{this.pAnimate2 = pAnimate2}}>
            <div className="p-keyframe-from-right">
                <div className="sec-2-Collections">
                    <h1>The Moonlight Collection</h1>
                </div>
                <div>
                <p>
                    The moonlight collection is inspired from different phases 
                    of moon structured in cotton chanderi fabric. Chanderi being 
                    a traditional ethnic Indian fabric is characterized by its light weight, sheer texture and fine luxurious feel.
                </p>
                </div>
            </div>
        </div>
      </div>
   </div>

    <div className="sec-2">
      <div className="Latest-Collections">
         <div  id="pAnimate" ref={pAnimate =>
            {this.pAnimate = pAnimate}} >
            <div className="sec-2-Collections ">
               <h1>The Disney Collection</h1>
            </div>
            <div>
               <p>
                    Dresses, gowns suited for a Princess, 
                    based on the tradional art of Madhubani, 
                    hand embroidered on pure silks and organza. 
                    The collecon wonderfully and imaginavely combines 
                    the grace of a bygone era, with the modern day fashion. Creavely designed Gowns and dresses are certain to catch the imaginaon of the young generaon not only in India but the world over.
               </p>
            </div>
         </div>
      </div>

      <div className="k2-cont">
        <div className="k2">
        
        </div>
      </div>


   </div>

   <div className="sec-3 text-center">
      <p> 
         "Moonlight came to me almost naturally as I had always been fascinated 
         with the purity and sanctity that is attached to the moon and stars..."
      </p>
      <div className="sec-3-btn-padder">
         <Link to="/media">
         <button>Read More</button></Link>
      </div>
   </div>
   <div id="read-the-blog" className="sec-3 text-center">
       <p>Read the Designer's Personal Blog</p>
      <div className="sec-3-btn-padder">
         <Link to="/blog">
         <button>Go There</button></Link>
      </div>
   </div>


   {/* <div className="sec-6 text-center">
      <div className="sec-6-header">
         <div>FOLLOW US ON IN SOCIAL MEDIA </div>
      </div>
      <div className="sec-6-img" id="sec-6-img-id-1">
         <div><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></div>
      </div>
      <div className="sec-6-img" id="sec-6-img-id-2">
         <div><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></div>
      </div>
      <div className="sec-6-img" id="sec-6-img-id-3">
         <div><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></div>
      </div>
   </div>
   <div className="sec-4">
      <div className="text-center sec-4-head">
         DESIGN
      </div>
      <div className="col-md-3">
         <div className="sec-4-an-1 sec-4-1-an">
            <div className="sec-4-color sec-4-1-an" id="sec-4-img-1"></div>
            <div className="sec-4-img sec-4-1-an"></div>
         </div>
         <div className="sec-4-an-1 sec-4-3-an" id="sec-4-down">
            <div className="sec-4-color sec-4-3-an" id="sec-4-img-2"></div>
            <div className="sec-4-img sec-4-3-an"></div>
         </div>
      </div>
      <div className="col-md-3">
         <div className="sec-4-an-1 sec-4-2-an" id="sec-4-more-down">
            <div className="sec-4-color sec-4-2-an" id="sec-4-img-3"></div>
            <div className="sec-4-img sec-4-2-an"></div>
         </div>
         <div className="sec-8-word-fade-r">
            <div className="sec-8-word">
               <p> accuium A.G.L dfp f, 
                  totam rem aperiam, <br />eaque ipsa quae 
                  ab illo inventore veritatis et quasi 
                  explicabo. <br />Nemo enim ipsam voluptatem 
                  aut fugit
               </p>
            </div>
         </div>
      </div>
      <div className="col-md-3">
         <div className="sec-4-an-1 sec-4-4-an">
            <div className="sec-4-color-v2 sec-4-4-an" id="sec-4-img-5"></div>
            <div className="sec-4-img-v2 sec-4-4-an"></div>
         </div>
      </div>
      <div className="col-md-3">
         <div className="sec-8-word-fade">
            <div className="sec-8-word">
               <p> blanditiis praesentium voluptatum deleniti 
                  quos dolores et quas molestias excepturi 
                  sint occaecati cupiditate non provident, <br />
                  explicabo. <br />Nemo enim ipsam voluptatem 
                  aut fugit
               </p>
            </div>
         </div>
         <div className="sec-4-an-1 sec-4-fast-an">
            <div className="sec-4-color sec-4-fast-anv2" id="sec-4-img-6"></div>
            <div className="sec-4-img sec-4-fast-anv2"></div>
         </div>
         <div className="sec-8-word-fade">
            <div className="sec-8-word">
               <p> Nam libero tempore, dokilo henko rekan-gop 
                  totam rem aperiam, <br />ut aut reiciendis 
                  voluptatibus maiores alias consequatur 
                  aut perferendis doloribus asperiores repellat. 
               </p>
            </div>
         </div>
      </div>
   </div>
   {/* 
   <div className="sec-8">
      <div className="sec-8-word-fade sec-8-dd">
         <div className="sec-8-word">
            <p> accusantium doloremque laudantium, 
               totam rem aperiam, <br />eaque ipsa quae 
               ab illo inventore veritatis et quasi 
               explicabo. <br />Nemo enim ipsam voluptatem 
               aut fugit
            </p>
         </div>
      </div>
      <div className="sec-8-back-word">
         this is in the background moving
      </div>
   </div>
   */}
   {/* <div className="sec-7">
      <div id="sec-7-left">
      </div>
      <div id="sec-7-right">
         <div className="sec-7-word-cont">
            <div className="row">
               <div className="col-md-6">
                  <div className="arrow">
                     <hr />
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="sec-7-word" id="sec-7-animation-1">
                     Rot enim ad minima veniam, 
                     quis nostrum exercitationem.
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="arrow">
                     <hr />
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="sec-7-word sec-7-word-b" id="sec-7-animation-2">
                     Roim adima venam, 
                     qustrum execi ationem.
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div> */}
</div>
)
}
}
export default Home;