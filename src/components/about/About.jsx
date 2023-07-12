import React from 'react';
import Headings from '../common/Headings';

const About = () => {
  return (
    <div className="about pt-5">
        <div className="container">
            <div className="row py-5">
                <div className="col-6">
                    <Headings subHeading="ABOUT US" heading="Driving Tommorow's Technology, Today" />
                </div>
                <div className="col-6">
                    <p className="para">
                    INTRA Defnse Technologies is a SAUDI company, leading in ‏development and designing and manufacturing Autonomous Systems and Advance Technologies ,We provide advanced technological solutions that cater to diverse sectors. 
                    </p>
                    <p className="para">
                    With a team of highly skilled experts, Our innovative solutions are built to cater to the needs of various clients, providing them with a competitive edge in their respective industries. we prioritize quality, efficiency, and innovation, making us a reliable partner 
                    </p>
                </div>
            </div>
            <div className="row">
                <img className="img-fluid p-0" src="/images/About us.jpg" alt="about" />
            </div>
        </div>
    </div>
  )
}

export default About;