import React from "react";

export default function Footer(props){
    return(
        <footer>
            {/* <form>
                <h1>Say Hello</h1>
                <label>Enter Name: </label>
                <input name="name" type="text" value={props.name} placeholder="Avnish Kumar" />
                <label>Enter Email id: </label>
                <input name="email" type="email" value={props.email} placeholder="abx@xyz.com" />
                <label>Your Message: </label>
                <textarea
                name="content"
                value={props.content}
                placeholder="Any Message for us..."
                rows="3"
                onChange={props.handleChange}
                />
                <button onClick={props.handleSubmit}></button>
            </form> */}

            <div className="row">
            <div className="col-md-4">
                <h3 className="footerHeading">Socials</h3>
                <div className="footerText">
                    <a href="">Terms and condidtions</a>
                    <a href="">Modes of Customer</a>
                    <a href="">Copyright @2024</a>
                    </div>
                    <div className="address">
                    <p> Viman Nagar Pune 411014, Maharashtra, India</p>
                    <p>86009XXXXX</p>
                    </div>
                    {/* <i class="fa-brands fa-linkedin"></i>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                    <a href="https://www.linkedin.com/company/techy-softwares/people/"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="linkedin"/></a>
                    <a href="www.github.com"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/github.png" alt="github"/></a>
                    <a href="www.twitter.com"><img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/twitterx--v2.png" alt="twitterx--v2"/></a>
                </div>
                
            <div className="col-md-4">
                <h3 className="footerHeading">Content</h3>
                <a className="footerLinks" href="#home">Home</a>
                <a className="footerLinks" href="#services">Services</a>
                <a className="footerLinks" href="#aboutUs">About Us</a>
                <a className="footerLinks" href="#contactUs">Contact Us</a>
                {/* <h3 className="footerHeading">Let's Stay Connected</h3> */}
                    {/* <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Enter your email to get latest updates!</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
            
                <button type="submit" class="btn subscribeButton">Subscribe</button>
                </form> */}
            </div>

            <div className="col-md-4">
                <h3 className="footerHeading">Let's Stay Connected</h3>

                    <form method="POST" action="/connect">
                <div class="form-group">
                    <label for="exampleInputEmail1">Enter your email to get latest updates!</label>
                    <input name ="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text mutedtextFooter">We'll never share your email with anyone else.</small>
                </div>
            
                <button type="submit" class="btn subscribeButton">Subscribe</button>
                </form>
            </div>
        </div>
        </footer>
    );
}