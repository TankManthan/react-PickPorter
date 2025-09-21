import React from 'react';
import client1 from '../assests/client1.png';
import client2 from '../assests/client2.png';
import client3 from '../assests/client3.png';
import client4 from '../assests/client4.png';
import client5 from '../assests/client5.png';
import client6 from '../assests/client6.png';
function Clients() {
    return (

        <div>
            <div className="container g-0 mb-4">
                <h2 className='text-center p-3 m-3'>Our Client</h2>
                <div className="d-flex justify-content-evenly align-items-center p-3 m-2" id='client-img'>
                    <img src={client1} alt="" width={150} height={100} />
                    <img src={client2} alt="" width={150} height={100} />
                    <img src={client3} alt="" width={150} height={100} />
                    <img src={client4} alt="" width={150} height={100} />
                    <img src={client5} alt="" width={150} height={100} />
                    <img src={client6} alt="" width={150} height={100} />
                    <img src={client1} alt="" width={150} height={100} />
                    <img src={client2} alt="" width={150} height={100} />
                    <img src={client3} alt="" width={150} height={100} />
                    <img src={client4} alt="" width={150} height={100} />
                    <img src={client5} alt="" width={150} height={100} />
                    <img src={client6} alt="" width={150} height={100} />
                </div>
            </div>
        </div>
    );
}

export default Clients;
