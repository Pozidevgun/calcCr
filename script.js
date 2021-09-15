const input = document.querySelector('.range'),
calcValue  = document.querySelector('.calc__value'),
currenty = document.querySelectorAll('.calc__currency'),
currencyValue = document.querySelector('.calc__currency-value'),
calcTermItem = document.querySelectorAll('.calc__term-item'),
calcIncomeMoney = document.querySelector('.calc__income--money'),
calcIncomeMounth = document.querySelector('.calc__income--month'),
calcProtectionMoney = document.querySelector('.calc__protection--money'),

calcincomeCurrenty = document.querySelector('.calc__income--currenty'),
calcProtectionCurrenty = document.querySelector('.calc__protection--currenty'),
monthPercent = document.querySelectorAll('.month__percent');


// на улучшение
// const percents = {
//     dollar: [15,22,28,33,40],
//     euro:[12,18,25,30,37],
//     funt:[10,14,19,25,33]
// }  
function findIncome(val,pers){
    let income = +val + +val*pers
    return income
}


function findPercents(percent) {
    return percent
}
test(input.value)
input.addEventListener('input', ()=>{
    let value = input.value;
    input.setAttribute('value', value);
    test(value);
    calcValue.innerHTML = value;
    calcProtectionMoney.innerHTML = (value * 0.71).toFixed(2);
    let inne = findIncome(value,sessionStorage.getItem('percent'));
    calcIncomeMoney.innerHTML = inne;
})

for (let i =0; i < currenty.length; i++){
    let currentyData =  currenty[i].getAttribute('data-currenty');
   let ggg = document.querySelectorAll('.ggg')
    currenty[i].addEventListener('click',(e)=>{
        for(let i = 0; i < ggg.length; i++){
            currenty[i].classList.remove('active')
            e.target.parentElement.classList.add('active')
        }
        currencyValue.innerHTML =  currentyData
        calcincomeCurrenty.innerHTML =  currentyData
        calcProtectionCurrenty.innerHTML =  currentyData
        
    }) 
}

function test(val) {
    calcTermItem.forEach(item => {
    
        let itemActive = item.querySelector('.fff')
        if (itemActive.classList.contains('active'))  {
            findPercents(item.dataset.percent)
            sessionStorage.setItem('percent', item.dataset.percent)
        }
        item.addEventListener('click', () => {
            sessionStorage.setItem('percent', item.dataset.percent)
            findPercents(item.dataset.percent)
            let inne = findIncome(val,sessionStorage.getItem('percent'))
            // console.log(value)
            calcIncomeMoney.innerHTML = inne;
            let calcTermPercent = item.querySelector('.calc__term-percent');
            let pers = calcTermPercent.innerHTML
            calcIncomeMounth.innerHTML = pers
        })

    })
}

