import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Performer from '../Performer/Performer';
import './Mugician.css'

const Mugician = () => {
    const [performer, setPerformer] = useState([]);
    const [mugician, setMugician] = useState([]);
    useEffect(() => {
        fetch('https://ohidurgclan.github.io/assignapi/assign.json')
        .then(res => res.json())
        .then(data =>setPerformer(data))
    }, [])

    const handlePerformer = (performer) => {
        const newMugician = [...mugician, performer];
        setMugician(newMugician);
    }

    return (
        <div className="mugician-container">
            <div className="performer-container">
                {
                    performer.map(performer => <Performer
                        key={performer.key}
                        performer={performer}
                        handlePerformer={handlePerformer}
                    >
                    </Performer>)
                }
            </div>
            <div className="cart-container">
                <Cart mugician={mugician}></Cart>
            </div>
        </div>
    );
};

export default Mugician;