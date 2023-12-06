import React from 'react';
import style from './Bg.module.css'

const Bg = () => {
    return (
        <div>
            <img className={style.bg} src='./Raster.jpeg' alt='img' />
        </div>
    );
}

export default Bg;