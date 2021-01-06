import './Information.css';

function Information({ opened }) {
    return (
        <section className={`information ${opened ? 'information__opened' : ''}`}>
            <p className="information__text">
                Нажмите на все изображения объекта, который упоминается в тексте. Если появятся новые подходящие картинки, также нажмите на них. Когда нужные изображения кончатся, выберите "Подтвердить".
            </p>
        </section>
    );
}

export default Information;