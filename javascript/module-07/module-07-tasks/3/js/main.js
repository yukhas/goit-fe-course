const user1 = {
    img: 'images/photo.jpg',
    name: 'Claudia Cardinale',
    age: 29,
    location: 'Philadelphia, PA',
    strawberries: 19,
    lemons: 5
};

const user2 = {
    img: 'images/photo2.jpg',
    name: 'Sophia Loren',
    age: 30,
    location: 'Rome, Italy',
    strawberries: 22,
    lemons: 4
};

const user3 = {
    img: 'images/photo3.jpg',
    name: 'Brigitte Bardot',
    age: 25,
    location: 'Paris, France',
    strawberries: 24,
    lemons:6
};


function createUserCard(user) {
    const userCard = document.createElement('div');
    const div1 = document.createElement('div');
    const imgCaption = document.createElement('div');
    const imgCaptionBottom = document.createElement('div');

    const userName = document.createElement('p');
    const addInfo = document.createElement('p');

    const divNumber1 = document.createElement('div');

    const divImg = document.createElement('div');

    const divBottomImg1 = document.createElement('div');

    userCard.classList.add('background');
    div1.classList.add('user-card');
    imgCaption.classList.add('image-caption');
    imgCaptionBottom.classList.add('image-caption-bottom');

    userName.classList.add('user-name');
    addInfo.classList.add('added-info');

    divNumber1.classList.add('bottom-images');
    divNumber1.classList.add('number');
    const divNumber2 = divNumber1.cloneNode(true);

    divBottomImg1.classList.add('bottom-images');
    const divBottomImg2 = divBottomImg1.cloneNode(true);
    const divBottomImg3 = divBottomImg1.cloneNode(true);
    divBottomImg3.classList.add('hand-img');

    divImg.innerHTML = `<img src=${user.img} alt="${user.name} photo">`;

    userName.innerHTML = user.name;
    addInfo.innerHTML = `<span class ="number">${user.age}</span><span>${user.location}</span>`;

    divBottomImg1.innerHTML = '<img src="images/strawberry-icon.png">';
    divBottomImg2.innerHTML = '<img src="images/lime-icon.png">';
    divBottomImg3.innerHTML = '<img src="images/hand-to-right.png">';
    divNumber1.innerHTML = user.strawberries;
    divNumber2.innerHTML = user.lemons;

    const root = document.querySelector('div');
    root.appendChild(userCard);
    userCard.appendChild(div1);
    div1.appendChild(divImg);
    div1.appendChild(imgCaption);
    div1.appendChild(imgCaptionBottom);
    imgCaption.appendChild(userName);
    imgCaption.appendChild(addInfo);
    imgCaptionBottom.appendChild(divBottomImg1);
    imgCaptionBottom.appendChild(divNumber1);
    imgCaptionBottom.appendChild(divBottomImg2);
    imgCaptionBottom.appendChild(divNumber2);
    imgCaptionBottom.appendChild(divBottomImg3);

    return userCard;
}

createUserCard(user1);
createUserCard(user2);
createUserCard(user3);