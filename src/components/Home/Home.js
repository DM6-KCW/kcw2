import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="container-fluid home-intro">
                    <div className="home-img-intro">
                        <img className="home-intro-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1024px-No_image_3x4.svg.png"/>
                        <div className="home-intro-word">
                            <h1>MITHI KALRA</h1>
                        </div>
                    </div>

                    

                </div>
            </div>
        )
    }
}

export default Home;
