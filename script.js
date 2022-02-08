const hello = document.querySelector('.say-hi');
const hello1 = document.querySelector('.say-hello');
const msg = document.querySelector('.facebook');
const mail = document.querySelector('.mail');

hello.addEventListener('click', openTab);
hello1.addEventListener('click', openTab);
msg.addEventListener('click', openMsg);
mail.addEventListener('click', sendMain);

function openTab() {
    window.open('mailto:say-hi@binod-bhatt.com.np', '_blank');
}

function openMsg() {
    window.open('https://m.me/binodbhattoff')
}

function sendMain() {
    window.open('mailto:say-hi@binod-bhatt.com.np?subject=Hello Message From binodbhatt.info.np', '_blank')
}