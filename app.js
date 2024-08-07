const review = document.querySelector('.container');
const profilePic = document.querySelector('.profilePic');
const name = document.querySelector('.name');
const profession = document.querySelector('.profession')
const description = document.querySelector('.description')

let object = [
    {
        image: 'images/WIN_20240220_13_26_17_Pro.jpg',
        name: 'Qutub Ahmed',
        profession: 'WEB DEVELOPER',
        description: 'a web development job involves , designing , creating and maintaining websites and web applications developers work with frontend and backend technologiestechnologies to ensure a seamless user experience and robust functionality.'
    },
    {
        image: 'images/noman.png',
        name: 'noman',
        profession: 'graphic designer',
        description: 'A graphic designer is an digital artist'
    },
    {
        image: 'images/faraz.png',
        name: 'faraz',
        profession: 'Programmer',
        description: 'A programmer is person who can do multi-purpose task for company'
    },
    {
        image: 'images/alijan.png',
        name: 'ali jan',
        profession: 'CEO',
        description: 'bohat paisa hai maire paas'
    },
    {
        image: 'images/ghulamali.png',
        name: 'ghulam ali',
        profession: 'accountant',
        description: 'he is just a person who calculate the total amount of company revenue'
    },
    {
        image: 'images/faqeerali.png',
        name: 'faqeer ali',
        profession: 'software engineer',
        description: 'A software engineer is a person who can make multiple softwares'
    },
]

var userCounter = 0;

function previousButtonHandler() {
    if (userCounter >= 0) {
        userCounter--;
        document.querySelector('.image').src = object[userCounter].image
        document.querySelector('.name').innerHTML = object[userCounter].name
        document.querySelector('.profession').innerHTML = object[userCounter].profession
        document.querySelector('.description').innerHTML = object[userCounter].description
    }
    else {
        userCounter = object.length -1
        document.querySelector('.image').src = object[userCounter].image
        document.querySelector('.name').innerHTML = object[userCounter].name
        document.querySelector('.profession').innerHTML = object[userCounter].profession
        document.querySelector('.description').innerHTML = object[userCounter].description
    }
}

function nextButtonHandler() {
    if (userCounter > object.length -1){
        userCounter = 0
        document.querySelector('.image').src = object[userCounter].image
        document.querySelector('.name').innerHTML = object[userCounter].name
        document.querySelector('.profession').innerHTML = object[userCounter].profession
        document.querySelector('.description').innerHTML = object[userCounter].description
    }
    else {
        userCounter++;
        document.querySelector('.image').src = object[userCounter].image
        document.querySelector('.name').innerHTML = object[userCounter].name
        document.querySelector('.profession').innerHTML = object[userCounter].profession
        document.querySelector('.description').innerHTML = object[userCounter].description

    }
}





