import React from 'react';
import keyfeature1 from '../assests/keyfeature1.png';
import keyfeature2 from '../assests/keyfeature2.png';
import keyfeature3 from '../assests/keyfeature3.png';
import keyfeature4 from '../assests/keyfeature4.png';

function KeyFeature() {
    return (
        <div>
            <div className="con text-white" id='features'>
                <h2 className='text-center mt-6 p-3 mb-3'>Key Feature We Offer</h2>
                <div className="row d-flex justify-content-center g-0 pt-3">
                    <div className="col-md-6 me-2 mb-4" id='feature-box'>
                        <h4>Unified Trip Details</h4>
                        <p>Check all your goods transportation trip information in the city.</p>
                        <img className="img-fluid" src={keyfeature1} alt="" width={650} height={520} />
                    </div>
                    <div className="col-md-4 ms-2 mb-4" id='feature-box'>
                        <h4>Payments through Prepaid Wallet</h4>
                        <p>No cash reimbursement hassles, as all trips are prepaid.</p>
                        <img className="img-fluid" src={keyfeature2} alt="" width={400} height={500} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center g-0 pb-3">
                    <div className="col-md-4 me-2 mb-4" id='feature-box'>
                        <h4>Complete Clarity and Control</h4>
                        <p>Monitor wallet usage with full visibility.</p>
                        <img className="img-fluid" src={keyfeature3} alt="" width={400} height={500} />
                    </div>
                    <div className="col-md-6 ms-2 mb-4" id='feature-box'>
                        <h4>Multi-User Access</h4>
                        <p>Seamlessly add, remove, activate, or deactivate users to maintain unified logistics operations.</p>
                        <img className="img-fluid" src={keyfeature4} alt="" width={650} height={520} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default KeyFeature;
