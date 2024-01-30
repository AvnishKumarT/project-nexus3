import React from "react";

export default function Home(){
    return(
        <div id="home" className="homepart">
            <div className="row homeContent">
                <div className="col-md-6">
                    <h1>Techy Software</h1>
                    <p>
                        We are a cutting-edge techy software company, wholly dedicated to the dynamic realms of software development, distribution, and technology-intensive products. Our passion lies in crafting and delivering top-notch software solutions for end users, covering a spectrum that includes open-source marvels and innovative Software as a Service (SaaS) offerings.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src="/images/AiHomeImg.png" alt="Ai Home Image" className="homeImg" />
                </div>
            </div>
        </div>
    );
}