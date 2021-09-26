import React from 'react';
import './Namelist.css'
const Namelist = (props) => {
    const { name, img } = props.data;
    return (
        <div className="selected-item">
            <img className="selected-img" src={img} alt="" />
            <h4 className="selected-performer">{name}</h4>
        </div>
    );
};

export default Namelist;