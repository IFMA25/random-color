const palette = document.querySelector('.color-palette'),
    btnCreate = document.querySelector('.btn-create'),
    btnReset = document.querySelector('.btn-reset'),
    symbol = '0123456789abcdef',
    container = document.querySelector('.container');
let hex;
let colorBox;
btnCreate.addEventListener('click', function(){
    addColor();
});
btnReset.addEventListener('click', function(){
    palette.innerHTML = '';
    container.style.backgroundColor = 'white';
});
//зміна кольору при клікі на блок
palette.addEventListener('click', function(e){
    if(e.target.classList.contains('color-box')){
        createColor();
        changeColor(e.target);
        e.target.querySelector('.text-color').textContent = hex;
        if(e.target.querySelector('.text-color')){
            e.preventDefault();
        }
    }
});
// функція генерації кольора
function createColor(){
    let color = '';
    for(i=0; i<6; i++){
        color = color + symbol[Math.floor(Math.random()*symbol.length)]; 
    }
    return hex = '#' + color;
}

//функція додавання блоку с кольором і зміною бекграунду
function addColor(){
    if(palette.querySelectorAll('.color-box').length < 10){
        colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        createColor()
        changeColor(colorBox);
        colorBox.innerHTML = `<p class="text-color">${hex}</p>`
        palette.append(colorBox);
        container.style.backgroundColor = hex +'4d';
    } return
    
}
//функція зміни стилей блоку
function changeColor(box){
    box.style.backgroundColor = hex;
}

// додавання блоку с кольором через клавіатуру
document.addEventListener('keydown', function(e){
    e.preventDefault();
    if(e.code.toLowerCase() == 'enter' || e.code == 'NumpadEnter'){
        addColor();
    }
})