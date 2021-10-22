const title = document.querySelector('.header__title');
const headerValue = title.getElementsByTagName('li');
const partitionValue = headerValue[0];
const primaryKeyValue = headerValue[1];
const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button');
function random() {
    return Math.floor(Math.random() * 999);
}

// Button Random Element
const btnRandom = button[0];
btnRandom.addEventListener('click', () => {
    let listElmnt = document.querySelector('.list-array');
    let length = input.value;
    let elmnt = document.querySelectorAll('.array-element'); 
    
    if (length === "" || length > 12 || length <= 0 || isNaN(length)) {
        alert('Xin vui lòng nhập số phần tử mảng(tối đa 12)!!')
    } else {
        // Remove Element
        for (let value of elmnt) value.remove();
        // Create Random Element
        for (let i = 0; i < length; i++) {
            let a = document.createElement('li');
            a.setAttribute('class', 'array-element' + i);
            a.innerHTML = random();
            listElmnt.appendChild(a);
        }
    }
  

})

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
const start = button[4];
start.addEventListener('click',  function() {
    let elmnt = document.querySelector('.array-element0'); 
    // elmnt.style.marginTop = '10px';
    elmnt.Xmove = 5;

    
})

// function swap(a, b) {
//     const listElmnt = document.querySelector('.list-array');
//     listElmnt.insertBefore(b,a);

// }