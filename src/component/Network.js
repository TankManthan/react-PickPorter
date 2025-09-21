import React from 'react';

function Network() {
    return (
        <div>
            <div className="con bg-dark text-white">
                <h1 className='text-center p-3'>Our Growing Network</h1>
                <div className="row d-flex justify-content-evenly items-center g-0 p-3 pt-3 pb-3">
                    <div className="col-md-3 text-center p-2">
                        <h2>21+</h2>
                        <p className='text-white-50'>CITIES</p>
                    </div>
                    <div className="col-md-3 text-center p-2">
                        <h2>7.5L+</h2>
                        <p className='text-white-50'>DRIVER PARTNERS</p>
                    </div>
                    <div className="col-md-3 text-center p-2">
                        <h2>10000+</h2>
                        <p className='text-white-50'>ENTERPRISE CLIENTS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Network;
