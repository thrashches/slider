const data = [
    {
        image: 'assets/img/png/slider_1.png',
        text: 'Only a small part of the work performed by our company is presented\
         on the site. For 14 years on in the construction market we have made happy\
         more than 1000 families',
        city: 'Rostov-on-Don<br>\
               LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },
    {
        image: 'assets/img/png/slider_2.png',
        text: 'Only a small part of the work performed by our company is presented\
         on the site. For 14 years on in the construction market we have made happy\
         more than 1000 families',
        city: 'Sochi<br>\
               Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        image: 'assets/img/png/slider_3.png',
        text: 'Only a small part of the work performed by our company is presented\
         on the site. For 14 years on in the construction market we have made happy\
         more than 1000 families',
        city: 'Rostov-on-Don<br>\
               Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }
];

let current = 0;


window.onload = () => {
    switchItem();
}

function loadImage () {
    // Помещает картинку из current в слайдер
    document.getElementById('imgSmall').src = data[current].image;
    document.getElementById('imgBig').src = data[current].image;
}

function setActive () {
    // Переключает активные ссылки
    
    // Сбрасываем активную ссылку
    document.getElementsByClassName('ctl ctl-p__active')[0].setAttribute('class', 'ctl ctl-p');
    document.getElementsByClassName('link-controls__item active')[0].setAttribute('class', 'link-controls__item');

    // Назанчаем активную ссылку
    document.getElementsByClassName('ctl ctl-p')[current].setAttribute('class', 'ctl ctl-p__active');
    document.getElementsByClassName('link-controls__item')[current].setAttribute('class', 'link-controls__item active');
}

function setDescription () {
    // Задает текстовые элементы описания
    document.getElementById('text').innerHTML = data[current].text;
    document.getElementById('city').innerHTML = data[current].city;
    document.getElementById('area').innerHTML = data[current].area;
    document.getElementById('time').innerHTML = data[current].time;
    document.getElementById('cost').innerHTML = data[current].cost;
}

function switchItem () {
    // Запускает обновление элементов на странице
    loadImage();
    setActive();
    setDescription();
}

function nextItem () {
    // Включает следующий слайд
    if (current + 1 === data.length) {
        current = 0;
    }
    else {
        current++;
    }
    switchItem();
    console.log(current);
}

function prevItem () {
    // Включает предыдущий слайд
    if (current === 0) {
        current = data.length - 1;
    }
    else {
        current--;
    }
    switchItem();
    console.log(current);
}

prevSmall.addEventListener('click', prevItem);
prevBig.addEventListener('click', prevItem);
nextSmall.addEventListener('click', nextItem);
nextBig.addEventListener('click', nextItem);


for (let element of document.querySelectorAll('.link-controls__item, .ctl-p, .ctl-p__active')) {
    element.addEventListener('click', linkClick);
}

// for (let e)



function linkClick(e) {
    e.preventDefault();
    current = parseInt(e.target.getAttribute('data'));
    switchItem();
}