import React from 'react';

const Headings = ({subHeading, heading}) => {
  return (
    <div>
        <h5 className="sub-heading">{subHeading}</h5>
        <h3 className="heading py-2">{heading}</h3>
        <div className="borders py-3">
            <span className="green-border"></span>
            <span className="blue-border"></span>
        </div>
    </div>
  )
}

export default Headings;