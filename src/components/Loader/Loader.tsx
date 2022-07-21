import React from 'react';

import './Loader.css';

const Loader: React.FC<{ showLoader: boolean }> = ({ showLoader }) => {
    console.log('Inside Loader: ' + showLoader);
    return (
        <React.Fragment>
            <div className={showLoader ? 'show-cover-spin' : 'cover-spin'}></div>
        </React.Fragment>
    );
};

export default Loader;