
// document.querySelector('h1').innerHTML='hgjkjhhgskdbhi djliszvfhnxdkjf';

// document.querySelector('.btn').addEventListener('click',function(){
//     document.querySelector('h1').style.color='yellow';
// })

document.querySelector('h1').innerHTML = '<h1>Hi I am software Engineer</h1>';

document.querySelector('.btnC').addEventListener('click', function() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('h1').style.color = randomColor;
});

document.querySelector('.pbtn').addEventListener('click', function() {
    document.querySelector('.popup').classList.toggle('dbBlock');
})



document.querySelector('.sidebarBtn').addEventListener('click',function() {
    document.querySelector('.sidebar').classList.toggle('mr0');
})
