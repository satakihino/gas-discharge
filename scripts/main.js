var myImage = document.querySelector('img');

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute ('src');
    if (mySrc === 'images/20191122_16.jpg')
{
    myImage.setAttribute ('src', 'images/unnamed.jpg');

}
else
{
    myImage.setAttribute ('src', 'images/20191122_16.jpg');
}
}

var myButton = document.querySelector('button');
var myHeading = document.getElementById('heading');

function setUserName ()
{
    var myName = prompt ('Пожалуйста, введите имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать, ' + myName + '!';

}

if(!localStorage.getItem('name'))
{
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добро пожаловать снова, ' + storedName + '!';
}

myButton.onclick = function ()
{
    setUserName();
}

var ButtonSend = document.getElementById('send');

function ItClicked ()
{
    var youclicked = alert ('Отправлено!');
}

ButtonSend.onclick = function ()
{
    ItClicked();
}