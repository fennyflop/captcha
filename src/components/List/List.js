import './List.css';
import Card from '../Card/Card';

function List({ questions }) {
    return (
        <div className="list">
            {questions.map((element, i) => {
                return <Card image={element.image} alt={element.alt} validate={element.validate} key={i} />
            })}
        </div>
    );
}

export default List;