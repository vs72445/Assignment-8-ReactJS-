import React, { useState } from 'react'
import './gallery.css'
import CloseIcon from '@material-ui/icons/Close';

import Img1 from './images/beagledog.jpg';
import Img2 from './images/butterfly.jpg';
import Img3 from './images/fox.jpg';
import Img4 from './images/frog.jpg';
import Img5 from './images/hourse.jpg';
import Img6 from './images/jellyfish.jpg';
import Img7 from './images/labradog.jpg';
import Img8 from './images/lioness.jpg';
import Img9 from './images/jellyfish2.jpg';
import Img10 from './images/parrot.jpg';
import Img11 from './images/squirrel.jpg';
import Img12 from './images/tailfish.jpg';

const Gallery = () => {
    let imgData = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 7,
            imgSrc: Img7
        },
        {
            id: 8,
            imgSrc: Img8
        },
        {
            id: 9,
            imgSrc: Img9
        },
        {
            id: 10,
            imgSrc: Img10
        },
        {
            id: 11,
            imgSrc: Img11
        },
        {
            id: 12,
            imgSrc: Img12
        }
    ]

    const [model, setModel] = useState(false);
    const [imgView, setImgview] = useState('');

    const getImg = (imgSrc) => {
        setImgview(imgSrc);
        setModel(true);
    }


    return (
        <>

            <div className={model ? "model open" : "model"}>
                <img src={imgView} alt="Image View" />
                <CloseIcon onClick={() => setModel(false)} />
            </div>

            <div className="gallery">
                {imgData.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt="Gallery Photos" style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Gallery