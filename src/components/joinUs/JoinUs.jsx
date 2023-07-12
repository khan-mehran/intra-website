import React from 'react';
import Headings from '../common/Headings';

const JoinUs = () => {
  return (
    <div className="about pt-5">
    <div className="container">
        <div className="row py-5">
            <div className="col-6">
                <Headings subHeading="CAREERS" heading="JOIN US" />
                <p className="para py-5">
                    With a team of highly skilled experts, Our innovative solutions are built to cater to the needs of various clients, providing them with a competitive edge in their respective industries. we prioritize quality, efficiency, and innovation, making us a reliable partner 
                </p>
                <button className="apply-now">APPLY NOW</button>
            </div>
            <div className="col-6">
                <img className="img-fluid p-0" src="/images/one vision.png" alt="about" />
                <img className="img-fluid py-5" src="/images/one team.png" alt="about" />
                <img className="img-fluid p-0" src="/images/one goal.png" alt="about" />
            </div>
        </div>
    </div>
</div>
  )
}

export default JoinUs;