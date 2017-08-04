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
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll); 
    }
    handleScroll(e){
        if(document.body.scrollTop > 1){

        }
        var scrollPercent = (window.$(window).scrollTop()) / (window.$(document).height() - window.$(window).height());
        console.log(scrollPercent)
        if(scrollPercent > 0.08){
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
      <div className="sec-4-color" id="sec-2-color-y"></div>
      <div id="latest-collections" className="Latest-Collections">
          <div className="p-keyframe-from-right">

          
         <div className="sec-2-Collections">
            <h1>Latest Collections</h1>
         </div>
         <div>
            <p>
               The moonlight collection is inspired from different 
               phases of moon structured in cotton chanderi fabric. 
               Chanderi being a traditional ethnic Indian fabric is 
               characterized by its light weight, sheer texture and 
               fine luxurious feel.Designs of Moonlight collection are seen surfacing the 
               stage in flattering cuts at the neck and mid-section, 
               right from short party dresses to flowy ball gowns to 
               the full-length cocktail dresses, she has given white a 
               whole new definition all together and with summer around, 
               it feels like a soothing balm to the eyes.
            </p>
         </div>
      </div>
      </div>
   </div>
      <div className="sec-2">
      <div id="latest-collections" className="Latest-Collections">
         <div  id="pAnimate" ref={pAnimate =>
            {this.pAnimate = pAnimate}} >
            <div className="sec-2-Collections ">
               <h1>Latest Collections</h1>
            </div>
            <div>
               <p>
                  The moonlight collection is inspired from different 
                  phases of moon structured in cotton chanderi fabric. 
                  Chanderi being a traditional ethnic Indian fabric is 
                  characterized by its light weight, sheer texture and 
                  fine luxurious feel.Designs of Moonlight collection are seen surfacing the 
                  stage in flattering cuts at the neck and mid-section, 
                  right from short party dresses to flowy ball gowns to 
                  the full-length cocktail dresses, she has given white a 
                  whole new definition all together and with summer around, 
                  it feels like a soothing balm to the eyes.
               </p>
            </div>
         </div>
      </div>
      <div className="sec-4-color" id="sec-2-color-y"></div>
   </div>
   <div className="sec-3 text-center">
      <h1>MEDIA</h1>
      <p> 
         "sed quia non numquam eius modi tempora 
         incidunt ut labore et dolore magnam aliquam 
         quaerat voluptatem. Ut."
      </p>
      <div className="sec-3-btn-padder">
         <Link to="/media">
         <button>FIND OUT MORE</button></Link>
      </div>
   </div>
   <div className="sec-6 text-center">
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
   <div className="sec-7">
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
   </div>
</div>
)
}
}
export default Home;