import React from 'react';
import Headings from '../common/Headings';

const News = () => {
  return (
    <div className="about pt-5">
    <div className="container">
        <div className="row py-5">
            <div className="col-6">
                <Headings subHeading="NEWS" heading="Check Out Latest News" />
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <img className="img-fluid p-0" src="/images/News Training .jpeg" alt="about" />
            </div>
            <div className="col-4">
                <img className="img-fluid p-0" src="/images/News Training .jpeg" alt="about" />
            </div>
            <div className="col-4">
                <img className="img-fluid p-0" src="/images/News Training .jpeg" alt="about" />
            </div>
        </div>
    </div>
</div>
  )
}

export default News;