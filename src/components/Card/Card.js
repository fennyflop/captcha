import { useState } from 'react';
import './Card.css';
import checkmark from '../../images/checkmark.png';

function Card({ image, alt, validate }) {

    const [selectedButton, setSelectedButton] = useState(false);

    return (
        <div correct={validate} className={`card ${selectedButton ? 'card__selected' : ''}`} onClick={() => {
            setSelectedButton(!selectedButton);
        }}>
            <img className="card__image" src={image} alt={alt} draggable="false" />
            <img className={`card__checkmark ${selectedButton ? 'card__checkmark-display' : ''}`} src={checkmark} alt="checkmark" draggable="false" />
        </div>
    );
}

export default Card;