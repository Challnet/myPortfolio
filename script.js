const cursor = document.querySelector('.cursor');
let timeout;

//follow mouse on mousemove
document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
    cursor.style.display = 'block';

    function mouseStopped () {
        cursor.style.display = 'none';
    }
    clearTimeout(timeout)
    timeout = setTimeout(mouseStopped, 1000);
})

//cursor effects on mouseout
document.addEventListener('mouseout', (e) => {
    cursor.style.display = 'none';
})


//Change color with the help button
const button = document.querySelector('.button_color');
const body = document.querySelector('body');

button.onclick = function () {
    body.classList.toggle('light-theme');
}

//Mousemove parallax
const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front_layer');
const back = document.querySelector('.back_layer');

const sFront = 150;
const sBack = 400;

parallax.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    front.style.transform = `
        translate(
            ${x / sFront}%,
            ${y / sFront}%
        )`;

    back.style.transform = `
        translate(
            ${x / sBack}%,
            ${y / sBack}%
        )`;
})

function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('show-menu');
}

let burgerLinks = document.querySelectorAll('.burger-list a');
burgerLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        let burgerMenu = document.querySelector('.burger-menu');
        burgerMenu.classList.remove('show-menu');
    });
});

function fetchData() {
    // Отправляем асинхронный GET-запрос к файлу data.php
    fetch('data.php')
        .then(response => response.json())
        .then(data => {
            // Полученные данные
            const contentContainer = document.getElementById('data-container');
            contentContainer.innerHTML = ''; // Очищаем контейнер

            // Создаем элементы для каждой записи
            data.forEach(person => {
                const personDiv = document.createElement('div');
                personDiv.innerHTML = `<strong>Name:</strong> ${person.name}, <strong>Age:</strong> ${person.age}, <strong>City:</strong> ${person.city}`;
                contentContainer.appendChild(personDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Отменяем стандартное действие формы (перезагрузку страницы)

        let formData = new FormData(this);

        fetch('ajax.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('myForm').style.display = 'none';
                    document.getElementById('success-message').style.display = 'block';
                    document.getElementById('success-message').style.color = 'greenyellow';
                    document.getElementById('success-message').style.marginBottom = '100px';
                    document.getElementById('success-message').style.fontSize = '40px';
                    document.getElementById('success-message').style.padding = '50px';
                    document.getElementById('success-message').style.border = '8px solid greenyellow';
                    document.getElementById('success-message').style.borderRadius = '15px';
                    document.getElementById('success-message').style.background = 'rgba(0, 0, 0, 0.6)';
                    document.getElementById('success-message').style.fontWeight = 'bold';
                    document.getElementById('success-message').style.boxShadow = '0 0 10px 5px black';
                } else {
                    alert('Error submitting form!');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error submitting form!');
            });
    });
});

