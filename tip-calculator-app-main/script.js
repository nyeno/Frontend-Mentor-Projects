const bill = document.getElementById('bill')
const tipPercent = document.getElementsByClassName('tip-percent')
const customTipPercent = document.getElementById('custom-tip-percent')
const peopleAmount = document.getElementById('people')
const tipPerPerson = document.getElementById('tip-per-person')
const totalPerPerson = document.getElementById('total-tip')
const reset =document.getElementById('reset')


let billValue = bill.value
let tipValue = 0
let peopleNumber = peopleAmount.value


//change the tipPerPerson and totalPerPerson after each button click
for(let x of tipPercent){
    x.addEventListener("click", () => {
        tipValue = x.value
        tipPerPerson.innerText = (changeTip(bill.value, x.value, peopleAmount.value )).toFixed(2)
        totalPerPerson.innerText = totalBill(bill.value,  peopleAmount.value, parseInt(tipPerPerson.innerText))
    })
}

//change tip and total on custom tip change 
customTipPercent.addEventListener('input', (e) => {
    tipValue = customTipPercent.value
    tipPerPerson.innerText = (changeTip(billValue, tipValue, peopleNumber)).toFixed(2)
    totalPerPerson.innerText = totalBill(billValue, peopleNumber, parseInt(tipPerPerson.innerText))
})

//change on bill change
bill.addEventListener('input', (e) => {
    billValue = bill.value
    tipPerPerson.innerText = (changeTip(billValue, tipValue, peopleNumber)).toFixed(2)
    totalPerPerson.innerText = totalBill(billValue, peopleNumber, parseInt(tipPerPerson.innerText))
})

//on number of people change
peopleAmount.addEventListener('input', (e) => {
    peopleNumber = peopleAmount.value
    tipPerPerson.innerText = (changeTip(billValue, tipValue, peopleNumber)).toFixed(2)
    totalPerPerson.innerText = totalBill(billValue, peopleNumber, parseInt(tipPerPerson.innerText))
})

// calculations functions 
function changeTip(bill, tipRate, numberOfPeople){
    return (bill * tipRate/100)/numberOfPeople
}

function totalBill(bill, numberOfPeople, tip){
    return (bill/numberOfPeople + tip)
}


// when reset button is clicked 
reset.addEventListener('click', ()=>{
    tipPerPerson.innerText = 0.00
    totalPerPerson.innerText = 0.00
    bill.value = 0
    peopleAmount.value = 0
})
