import React, {Component} from 'react';



import "./designer.css";

class Designer extends Component {
    render() {
        return (
            <div className="designer-container">
                <div className="text-center">
                    <div className="margin-down">
                        <h1>DESIGNER</h1>
                    </div>
                </div>

                <div className="stuff-center">
                    <img className="stuff-center" id="designer-img" src="https://www.sikids.com/img/placeholder/no-img.png" alt=""/>
                </div>
            </div>
        )
    }
}

export default Designer;
