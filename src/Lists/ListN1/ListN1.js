const bird1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg';
const car1 = 'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364';
const car2 = 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg?itok=QTxMln2k';
const headlight1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqrI3bsCjZ_SpEQrIEm5wM6vVjWd66PLnDQ&usqp=CAU';
const headlight2 = 'https://www.imagetin.com/images/micksgarage-ie/646jk67ggt/8_2c4448.jpg'
const road1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E4YEXFV0C2RAwCNe1MMkKB0w4J0REhZI5Q&usqp=CAU';
const road2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYOzPw6Syn_E7UWTpMVIw3_f9d3qh3uvWMA&usqp=CAU';
const trafficlight1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9FpMr1YyILPwful_YW-Pv2fH9artgGqqEQ&usqp=CAU';
const trafficlight2 = 'https://www.brusselstimes.com/wp-content/uploads/2020/07/Untitled-design-3.png';
const trafficlight3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9lVL9WbxRzlrKLixtrRw8V5hILTfExHNLQ&usqp=CAU';

const ListN1 = {
    title: 'Выберите все квадраты, в которых изображены',
    span: 'светофоры',
    error: 'Выберите все совпадающие изображения.',
    questions: [
        {
            image: bird1,
            alt: 'bird1',
            validate: false,
        },
        {
            image: trafficlight1,
            alt: 'trafficlight1',
            validate: true,
        },
        {
            image: car1,
            alt: 'car1',
            validate: false,
        },
        {
            image: headlight2,
            alt: 'headlight2',
            validate: false,
        },
        {
            image: road1,
            alt: 'road1',
            validate: false,
        },
        {
            image: trafficlight2,
            alt: 'trafficlight2',
            validate: true,
        },
        {
            image: car2,
            alt: 'car2',
            validate: false,
        },
        {
            image: headlight1,
            alt: 'headlight1',
            validate: false,
        },
        {
            image: trafficlight3,
            alt: 'trafficlight3',
            validate: true,
        },
    ]
}

export default ListN1;