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
            <div className="sec-4-an-1" id="testprop">
               <div className="sec-4-color sec-4-fast-an" id="sec-2-color-y"></div>
               <div className="sec-4-img sec-4-fast-an" id="sec-2-color-t"></div>
            </div>
         </div>
         <div className="Latest-Collections">
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
               <Link to="/media"><button className="sec-3-btn">FIND OUT MORE</button></Link>
            </div>
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
            <div className="sec-4-an-1">
               <div className="sec-4-color" id="sec-4-img-1"></div>
               <div className="sec-4-img"></div>
            </div>
            <div className="sec-4-an-1" id="sec-4-down">
               <div className="sec-4-color" id="sec-4-img-2"></div>
               <div className="sec-4-img"></div>
            </div>
         </div>
         <div className="col-md-3">
            <div className="sec-4-an-1" id="sec-4-more-down">
               <div className="sec-4-color" id="sec-4-img-3"></div>
               <div className="sec-4-img"></div>
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
            <div className="sec-4-an-1">
               <div className="sec-4-color-v2" id="sec-4-img-5"></div>
               <div className="sec-4-img-v2"></div>
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

            <div className="sec-4-an-1">
                <div className="sec-4-color" id="sec-4-img-6"></div>
                <div className="sec-4-img"></div>
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


      {/* <div className="sec-8">
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
      </div> */}

      <div className="sec-7">
         <div id="sec-7-left">
         </div>
         <div id="sec-7-right">
            <div className="sec-7-word-cont">
                <div className="row">
                    <div className="col-md-6">
                        <div className="arrow"><hr /></div>
                    </div>
                    <div className="col-md-6">
                        <div className="sec-7-word">
                            Rot enim ad minima veniam, 
                            quis nostrum exercitationem.
                        </div>
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