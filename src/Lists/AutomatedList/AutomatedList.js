const options = ['коты', 'собаки', 'лисицы'];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let AutomatedList = {};

AutomatedList.title = 'Выберите все квадраты, в которых изображены';
AutomatedList.span = options[Math.floor(Math.random() * options.length)];
AutomatedList.error = 'Ошибка'

let questions = [];

// Cats

for (let i = 1; i < 4; i++) {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            let question = {};
            question.alt = i + Math.floor(Math.random() * 100);
            question.image = res[0].url;
            if (AutomatedList.span === options[0]) {
                question.validate = true;
            } else {
                question.validate = false;
            }
            questions.push(question);
        })
}

// Dogs 

for (let i = 3; i < 7; i++) {
    fetch('https://random.dog/woof.json')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            let question = {};
            question.alt = i + Math.floor(Math.random() * 100);
            question.image = res.url;
            if (AutomatedList.span === options[1]) {
                question.validate = true;
            } else {
                question.validate = false;
            }
            questions.push(question);
        })
}

// Foxes

for (let i = 6; i < 8; i++) {
    fetch('https://randomfox.ca/floof/')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            let question = {};
            question.alt = i + Math.floor(Math.random() * 100);
            question.image = res.image;
            if (AutomatedList.span === options[2]) {
                question.validate = true;
            } else {
                question.validate = false;
            }
            questions.push(question);
        })
        .finally(() => {
            AutomatedList.arrayQuestions = questions;
        })
}


export default AutomatedList;