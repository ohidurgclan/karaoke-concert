import React from 'react';
import './Namelist.css'
const Namelist = (props) => {
    const { name, img } = props.data;
    return (
        <div className="selected-item">
            <img className="selected-img" src={img} alt="" />
            <h5 className="selected-performer">{name}</h5>
        </div>
    );
};

export default Namelist;