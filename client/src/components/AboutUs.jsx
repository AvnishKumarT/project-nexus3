import React from "react";
import Card from "./Card";

export default function AboutUs(){
    return (
        <div id="aboutUs" className="aboutUsPart">
            <h1>About Us</h1>
            <div className="row">
                <div className="col-md-4 cards">
                <Card
                    imgLink="../images/history.jpeg"
                    title="Our History"
                    description="Established in 2008, pioneering tech solutions, evolving, adapting, customer-centric success."
                />
                </div>
                <div className="col-md-4 cards">
                <Card
                    imgLink="../images/AiHomeImg2.jpg"
                    title="Products"
                    description="Innovative software, cutting-edge hardware, and tailored SaaS solutions for businesses." />
                </div>
                <div className="col-md-4 cards">
                <Card
                    imgLink="../images/AiHomeImg3.jpg"
                    title="Technologies"
                    description="
                    AI-driven solutions, machine learning, natural language processing, automation for transformative impact."
                />
                </div>
            </div>
            <h1>Meet our Team</h1>
            <div className="row">
                <div className="col-md-4 cards">
                <Card
                    imgLink="../images/team1.jpg"
                    title="Avnish Thakur"
                    description="Founder & CEO"
                />
                </div>
                <div className="col-md-4 cards">
                <Card
                    imgLink="../images/team2.jpg"
                    title="Vivek Vikrama"
                    description="Lead Developer"
                />
                </div>
                <div className="col-md-4 cards">
                <Card
                    imgLink="../images/team3.jpg"
                    title="Kiya"
                    description="MD & Chairman"
                />
                </div>
            </div>
        </div>
    );
}