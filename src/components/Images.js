import React from 'react'
import image1 from '../images/bk.jpg';
import './Image.css';

function Images() {
    return (
            <div className='img'>
                <img src= {image1} alt='image_1' className='img1' />
                <img src= {image1} alt='image_1' className='img1' />
            </div>
    )
}

export default Images
