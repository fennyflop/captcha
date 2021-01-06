import { useState } from 'react';
import './Card.css';
import image from '../../images/image.jpg';
import checkmark from '../../images/checkmark.png';

function Card() {

    const [selectedButton, setSelectedButton] = useState(false);

    return (
        <div className={`card ${selectedButton ? 'card__selected' : ''}`} onClick={() => {
            setSelectedButton(!selectedButton);
        }}>
            <img className="card__image" src={image} alt="1" draggable="false" />
            <img className={`card__checkmark ${selectedButton ? 'card__checkmark-display' : ''}`} src={checkmark} alt="checkmark" draggable="false" />
        </div>
    );
}

export default Card;