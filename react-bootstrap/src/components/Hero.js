import React from "react"
import { Button } from 'react-bootstrap'

function Hero() {
    return (
        <section className="options_block">
            <img src="/react-bootstrap-site/src/img/Ellipse1.png" className="ellipse1" alt="Ellipse1"/>
            <img src="/react-bootstrap-site/src/img/Ellipse2.png" className="ellipse2" alt="Ellipse2"/>
            <div className="hero">
                <div className="grid">
                    <div className="item">
                        <div>
                            <h1>
                                Lorem ipsum set ammet test-test
                            </h1>
                            <h3 className="sub">
                                LET US HELP YOU GET IT ALL BACK!
                            </h3>
                        </div>
                    </div>
                    {/* <div className="item">
                        <div className="img-wrap">
                            <img src="src/img/options/1.jpg" alt="1"/>
                        </div>
                    </div> */}

                    <hr class="half-rule"/>
                    <div className="text-button">
                        <div className="block-text">
                            <p className="hero-text">
                                We currently take cases <br></br> that are $10,000 US and up
                            </p>
                        </div>
                        <div className="block-btn">
                            <Button variant="dark" className="btn-hero">Get a free consultation</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    );
  }
  
  export default Hero;