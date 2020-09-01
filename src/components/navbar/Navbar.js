import React, { Component } from 'react';
import './navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light pr-md-5 pl-md-5 py-2 fixed-top">
                    <a className="navbar-brand" href="#">
                        <img className="w-50 h-100" src="./logo.png"/>
                        <img className="w-50 h-100" src="./logo2.png"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-center w-100">
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#">Why Vyorius?</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#">Solutions</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#">Use Cases</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#">Team</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#">Partners</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li className="launch-button nav-item p-2 ml-lg-auto">
                                <button type="button" className="btn">Launch Vyorius</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
