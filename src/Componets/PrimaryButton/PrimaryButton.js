import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-outline btn-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;