import React from "react";
import './About.css';
import Header from "./Header";
import Footer from "./Footer" ;


function About() {
    return (
        <>
        <Header />
            <div id="aboutus" >

                <h1 style={{fontSize: "35px"}} >Welcome</h1>
                <p style={{fontSize: "25px" , color : "black"}} >

                    Events & Weddings by Celebrate Pro acknowledges the importance of your event and that you deserve a team that is focused on you every step of the way.
                    We value earning your trust and executing events and weddings that exceed your expectations. We are a company whose foundation is built on quality, integrity, passion and enthusiasm for the events we create. We work with the finest vendors and are dedicated to bringing you the most progressive and innovative designs for your event. We work hard, laugh often, and never lose sight of delivering on your vision.
                    Let us do the planning, design and execution of your big day, while you enjoy the celebration! </p>
            </div>

            <Footer/>
            </>
    )
}
export default About;