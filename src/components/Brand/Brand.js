import React, {Component} from 'react';
import Designer from '../Designer/Designer';
import "./Brand.css";
import fullLogo from '../../images/full-logo.png';

class Brand extends Component {
render() {
return (
<div>
   <div className="brand-container">
      <div className="text-center">
         <div className="m-d">
            <h1>THE BRAND</h1>
         </div>
         <div className="img-logo">
            <img className="full-logo" src={fullLogo} alt=""/>
         </div>
         <div>
            <h3>WHO WE ARE</h3>
         </div>
         <div className="pinch-margin">
            <p>iLorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna
               aliqua. Ut enim ad minim veniam, quis nostrud exercitation
               ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit
               esse ciiLorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna
               aliqua. Ut enim ad minim veniam, quis nostrud exercitation
               ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit
               esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
               occaecat cupidatat non proident, sunt in culpa qui officia
               deserunt mollit anim id est laborum
            </p>
         </div>
         <div>
            <h3>WHAT DO WE WANT TO ACHIEVE?</h3>
         </div>
         <p>For the brand to become the predominant
            occasion-wear choice for contemporary
            luxury shoppers around the globe
         </p>
         <p>For the brand to become the predominant
            occasion-wear choice for contemporary
            luxury shoppers around the globe
         </p>
         <p>For the brand to become the predominant
            occasion-wear choice for contemporary
            luxury shoppers around the globe
         </p>
      </div>
   </div>
   <Designer />
</div>
)
}
}
export default Brand;
