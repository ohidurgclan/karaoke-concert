import React from 'react';
import Namelist from '../Namelist/Namelist';
import './Cart.css'
const Cart = (props) => {
    const {mugician} = props;
    const totalMugician = (previus, performer) => previus + performer.salary;
        const total = mugician.reduce(totalMugician, 0);
    return (
        <div className="added-persion">
            <div>
                <h2 className="cart-h2"><i className="fas fa-user-plus"></i>  Added Performer</h2>
                <h4 className="performer-h4">Performer Count: {props.mugician.length}</h4>
                <h4>Total Salary: ${total.toFixed(2)}</h4>
                <h2 className="cart-h2">Selected Performer</h2>
                {
                    mugician.map(data => <Namelist
                        key={data.key}
                        data={data}
                    >
                    </Namelist> )
                }
                <button className="cart-btn"><i className="fas fa-user-plus"></i>  Add List</button>
            </div>
        </div>
    );
};

export default Cart;