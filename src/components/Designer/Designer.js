import React, {Component} from 'react';
import "./Designer.css";
import fullLogo from '../../images/full-logo.png';
class Designer extends Component{
render() {
return (
<div>
   <div className="designer-container text-center">
      <div id="designer">
         <h1>THE DESIGNER</h1>
      </div>
      <div className="img-logo">
         <img className="full-logo" src={fullLogo} alt=""/>
      </div>
      <div>
         <p>Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis
            dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet
         </p>
      </div>
      <div>
         <div>
            <p>
               Duis aute irure dolor in reprehenderit in voluptate velit
               esse ciiLorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
         </div>
         <div>
            <p>
               Consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua.
            </p>
         </div>
         <div>
            <p>
               Duis aute irure dolor in reprehenderit in voluptate velit
               esse ciiLorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
         </div>
      </div>
      <div>
         <p>Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis
            dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet
         </p>
      </div>
   </div>
</div>
)
}
}
export default Designer;
