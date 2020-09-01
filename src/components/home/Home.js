import React, { Component } from 'react';
import './home.css';

export class Home extends Component {
    render() {
        return (
            <div className="home d-flex flex-column flex-md-row container">
                <div id="home-content">
                    <h6 className="text-uppercase text-center text-md-left p-2">
                        connecting the disconnected
                    </h6>
                    <h1 className="text-center text-md-left py-4">
                        <span className="orangeText">Vyorius</span> brings unmanned robots <span className="orangeText">together</span>,wherever they are
                    </h1>
                    <p className="text-center text-md-left py-3">
                        With all of the operations, commanding and maintenance tools in 
                        one place, unmanned vehicles will stay connected and productive 
                        no matter where you’re operating.
                    </p>
                    <div className="button-container text-center text-md-left">
                        <button type="button" className="btn p-3 mr-2">Try Vyorius</button>
                        <button type="button" className="btn btn-outline p-3 ml-2">Learn More</button>
                    </div>
                    <div className="text-center text-md-left pt-2 pb-5">
                        <small>Need to order ?</small>
                        <a href="#">Get Started</a>
                    </div>
                    
                </div>
                <div id="home-image" className="p-3">
                    <img className="w-100 h-100" src="./homeImage.png"/>
                </div>
            </div>
        )
    }
}

export default Home
