import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
class Home extends Component {
render() {
return (
<div className="home-container">
   

   <div className="sec-5">
       <div className="sec-5-back-img">
            <div className="sec-5-word-cont text-center">           
                <div className="sec-5-word">
                    FASHION <br />
                    BEAUTY  <br />
                    LIFESTYLE
                </div>
            </div>
       </div>
   </div>

<div className="container-fluid">

      
   


      <div className="sec-2">

      <div className="sec-2-sudo-sec4">
            <div className="sec-4-an-1">
                <div className="sec-4-color"></div>
                <div className="sec-4-img"></div>
            </div>
        </div>

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
         <div className="text-center">
            <h1>MEDIA</h1>
         </div>
         <div>
            <p className="sec-3-p"> 
               "sed quia non numquam eius modi tempora 
               incidunt ut labore et dolore magnam aliquam 
               quaerat voluptatem. Ut."
            </p>
         </div>
         <div className="text-center sec-3-btn-padder">
            <button className="sec-3-btn">FIND OUT MORE</button>
         </div>
      </div>
   </div>


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


   <div className="sec-4">
      <div className="col-md-3">

         <div className="sec-4-an-1">
            <div className="sec-4-color sec-4-mid-an"></div>
            <div className="sec-4-img" id="sec-4-img-1"></div>
         </div>

         <div className="sec-4-an-1" id="sec-4-down">
            <div className="sec-4-color sec-4-slow-an" id="sec-4-img-2"></div>
            <div className="sec-4-img sec-4-slow-an"></div>
         </div>

      </div>

      <div className="col-md-3">
         <div className="sec-4-an-1" id="sec-4-more-down">
            <div className="sec-4-color sec-4-mid-an" id="sec-4-img-3"></div>
            <div className="sec-4-img sec-4-mid-an"></div>
         </div>
      </div>
      
      <div className="col-md-3">
         
         <div className="sec-4-an-1">
            <div className="sec-4-color-v2 sec-4-fast-an"></div>
            <div className="sec-4-img-v2 sec-4-fast-an"></div>
         </div>
      </div>
      <div className="col-md-3">
         <div className="sec-8-word-fade">
            <div className="sec-8-word">
                <p> accusantium doloremque laudantium, 
                    totam rem aperiam, <br />eaque ipsa quae 
                    ab illo inventore veritatis et quasi 
                    explicabo. <br />Nemo enim ipsam voluptatem 
                    aut fugit
                </p>
            </div>
        </div>
      </div>
   </div>


   <div className="sec-8">
        <div className="sec-8-word-fade">
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

   <div className="sec-7">

        <div className="text-center margin-down">
            <h1>Dolore Magnam</h1>
        </div>

        <div>
            <div className="sec-7-img"></div>
        </div>

        <div>
            <div className="sec-7-bg-word">
                <div className="sec-7-word">
                    <h1 className="sec-7-word">THESE ARE THE WORD</h1>
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