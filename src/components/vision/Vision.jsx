import React from 'react';
import Headings from '../common/Headings';

const Vision = () => {
  return (
    <div className="vision-section">
    <div className="container">
        <div className="row">
            <div className="col-4 py-5">
                <Headings subHeading="Subtitle here" heading="A supporting header can be added here" />
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col-4 vision d-flex justify-content-center flex-column p-5">
                        <div className="py-3">
                            <h3>Vision</h3>
                            <p>To revolutionize the way the world operates through the power of autonomous technologies. </p>
                        </div>
                    </div>
                    <div className="col-8 mission d-flex justify-content-center flex-column p-5">
                        <div className="py-3">
                            <h3>Mission</h3>
                            <p>To deliver the greatest value to our customers, partners, and stakeholders, while maintaining world-class standards of professionalism, integrity, and social responsibility.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Vision;