const dropdownButton = document.querySelector("#nav-button")
const dropdown = document.querySelector("#dropdown-mobile")

function toggleHidden(hide){
    hide.classList.toggle('hidden')
}

dropdownButton.addEventListener('click', function(e){
    e.preventDefault();
    toggleHidden(dropdown)
})
