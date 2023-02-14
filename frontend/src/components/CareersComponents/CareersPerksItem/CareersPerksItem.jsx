import React from 'react';
import "./careersPerksItem.scss";

const CareersPerksItem = (props) => {
    const { img, title, paragraph } = props;
    return (
        <div className="careers-perk-item">
            <img src={img} alt="ball" />
            <h4>{title}</h4>
            <p>{paragraph}</p>
        </div>
    )
}

export default CareersPerksItem;