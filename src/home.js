import React from 'react';
import './home.css'

export default function Home(){
    return (
        <div className="home">
            <div className="hero">
            <nav className="navbar">
                <img src="/PngExport/Flag.png" alt="" />
                <ul className="menu">
                    <li>Home</li>
                    <li>Courts</li>
                    <li>Register</li>
                    <li>Login</li>
                </ul>
            </nav>
            <div className="banner">
                <div className="title">
                    <h1>Book Sport Court<br/>In under 5 mins</h1>
                    <p>Now you can shop our products now</p>
                    <button>Order Now</button>
                </div>
                <img src="/PngExport/Messi.png" alt="messi" />
            </div>
            </div>
            <div className="works">
                <h1>HOW IT WORKS</h1>
                <div className="step">
                    <div className="">
                        <img src="/PngExport/Search.png" alt="" />
                        <p>BROWSE</p></div>
                    <div className="">
                        <img src="/PngExport/Callendar.png" alt="" />
                        <p>BOOK</p></div>
                    <div className="">
                        <img src="/PngExport/Ball.png" alt="" />
                        <p>PLAY</p></div>
                </div>
            </div>
        </div>
    );
}