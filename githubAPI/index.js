const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')


const avatar = document.getElementById('avatar')
const fullName = document.getElementById('full_name')
const userName = document.getElementById('user_name')
const dateJoined = document.getElementById('date_joined')
const bio = document.getElementById('bio')
const repoCount = document.getElementById('repos_count')
const followerCount = document.getElementById('followers_count')
const followingCount = document.getElementById('following_count')
const city = document.getElementById('location')
const twitter = document.getElementById('twitter')
const link = document.getElementById('link')
const company = document.getElementById('company')


let user = ""
let url = "https://api.github.com/users/" 



searchForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    user = searchInput.value
    getAdvice(user)
})

const getAdvice =  (userName) =>{
    fetch(url + userName)
        .then(response => response.json())
            .then(data => updateData(data));
}

function updateData(details){
    fullName.innerText = details.name
    avatar.src = details.avatar_url
    userName.innerText = details.login
    dateJoined.innerText = details.created_at
    bio.innerText = details.bio
    repoCount.innerText = details.public_repos
    followerCount.innerText = details.followers
    followingCount.innerText = details.following
    city.innerText = details.location
    twitter.innerText = details.twitter_username
    twitter.href = "https://twitter.com/" + details.twitter_username
    link.innerText = details.login
    link.href = details.html_url
    company.innerText = details.company


}

