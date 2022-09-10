import React from 'react';

const PerformCampModal = () => {
    return (
        <div>
        <input type="checkbox" id="PerformCampModal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="PerformCampModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">PerformCamp</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </div>
        </div>
    </div>
    );
};

export default PerformCampModal;