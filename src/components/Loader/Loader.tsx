import React from 'react';

import './Loader.css';

const Loader: React.FC<{ showLoader: boolean }> = ({ showLoader }) => {
    return (
        <>
            {showLoader && <div className={'cover-spin'}></div>}
        </>
    );
};

export default Loader;