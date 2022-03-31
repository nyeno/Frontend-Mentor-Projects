const changeAdvice = document.getElementById('change-advice')
const advice = document.getElementById('advice')
const adviceId = document.getElementById('advice-id')

let index = 1
let url = "https://api.adviceslip.com/advice/" 



changeAdvice.addEventListener("click", ()=>{
    index = Math.floor(Math.random()*220)
    adviceId.innerHTML = index;
    getAdvice(index)
})

const getAdvice =  (indexValue) =>{
    fetch(url + indexValue)
        .then(response => response.json())
            .then(data => advice.innerHTML ='"  ' + data.slip.advice + '  "');
}

