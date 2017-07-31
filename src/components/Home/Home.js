import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
class Home extends Component {
render() {
return (
<div className="container-fluid home-container">
   <div className="sec-6 text-center">
      <div className="sec-6-header">
         <div>FOLLOW US ON IN SOCIAL MEDIA </div>
      </div>

      <div className="sec-6-marg">

        <div className="sec-6-img-cont"> 
            <div className="sec-6-img"></div>
        </div>

        <div className="sec-6-img-cont"> 
            <div className="sec-6-img"></div>
        </div>

        <div className="sec-6-img-cont"> 
            <div className="sec-6-img"></div>
        </div>

      </div>

   </div>
   <div className="sec-2">
      <div className="Latest-Collections">
         <div className="sec-2-Collections">
            <h1>Latest Collections</h1>
         </div>
         <div>
            <p>
               Lorem ipsum dolor sit amet, consetetur 
               sadipscing elitr, sed diam nonumy eirmod 
               tempor invidunt ut labore et dolore magna 
               aliquyam erat, sed diam voluptua. At vero eos 
               et accusam et justo duo dolores et ea rebum. 
               Stet clita kasd gubergren, no sea takimata sanctus 
               est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
               sit amet, consetetur sadipscing elitr, sed diam 
               nonumy eirmod tempor invidunt ut labore et dolore 
               magna aliquyam erat, sed diam voluptua. At vero eos et 
               accusam et justo duo dolores et ea rebum. Stet clita 
               kasd gubergren, no sea takimata sanctus est Lorem ipsum 
               dolor sit amet.
            </p>
         </div>
         <div className="sec-2-bm">
            <h3>OUR BRANDS & MARKS</h3>
         </div>
         <div className="sec-2-bm-img">
            <div id="sec-2-bm-li" className="row">
               <div className="col-md-3">
                  <img src="http://2c2f06a14a9ade4267e6-fb8aac3b3bf42afe824f73b606f0aa4c.r92.cf1.rackcdn.com/tenantlogos/26271.png"/>
               </div>
               <div className="col-md-3">
                  <img src="http://creator.design/_logos/52/logo-52_06.png"/>
               </div>
               <div className="col-md-3">
                  <img src="http://www.conceptfashion.be/Uploads/Images/Brands/andylucy/Logo/andylucy_black.png"/>
               </div>
               <div className="col-md-3">
                  <img src="http://www.conceptfashion.be/Uploads/Images/Brands/andylucy/Logo/andylucy_black.png"/>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="sec-3">
      <div>
         <div className="text-center"><h1>Lorem Ipsum</h1></div>
         <div>
            <p className="sec-3-p"> 
               sed quia non numquam eius modi tempora 
               incidunt ut labore et dolore magnam aliquam 
               quaerat voluptatem. Ut.
            </p>
         </div>
         <div className="text-center sec-3-btn-padder">
            <button className="sec-3-btn">FIND OUT MORE</button>
         </div>
      </div>
   </div>


   <div className="sec-4">

       <div className="sec-4-an-1">
            <div className="sec-4-color"></div>
            <div className="sec-4-img"></div>
       </div>


   </div>




</div>
)
}
}
export default Home;