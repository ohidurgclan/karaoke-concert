import React from 'react';
import Rating from 'react-rating';
import './Performer.css'

const Performer = (props) => {
    const { name, role, age, from, salary, star, img, url } = props.performer;
    return (
            <div className='card'>
                <div className='card-image'>
                    <img className="product-img" src={img} alt="" />
                </div>
                <div className='performer-details'>
                    <h2>{name}</h2>
                    <h4>Age: {age}</h4>
                    <h4>From: {from}</h4>
                    <h4>Role: {role}</h4>
                    <h4>Salary: ${salary.toFixed(2)}</h4>
                <h4>Rating:  <Rating
                    emptySymbol="far fa-star rating-color"
                    fullSymbol="fas fa-star rating-color"
                    initialRating={star}
                /> </h4>
                <button onClick={() => props.handlePerformer(props.performer)} className="card-btn"><i className="fas fa-user-plus"></i>  Add To List</button>
                </div>
                <div className="social-link">
                    <h4>Official Facebook Page</h4>
                    <a href={url}><i className="fab fa-facebook-square fa-3x"></i></a>
                </div>
            </div>
    );
};

export default Performer;