import React from 'react';
import preloader from '../../../assets/img/spinner.gif';

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt='spinner' />
        </div>
    )
}

export default Preloader;