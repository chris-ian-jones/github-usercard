/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/chris-ian-jones')
//   .then(data => {
//     console.log('response:', data)
//   })
//   .catch(error => {
//     console.log('error message')
//   })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

const exampleObject = {
  "login": "chris-ian-jones",
  "id": 48461758,
  "node_id": "MDQ6VXNlcjQ4NDYxNzU4",
  "avatar_url": "https://avatars0.githubusercontent.com/u/48461758?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/chris-ian-jones",
  "html_url": "https://github.com/chris-ian-jones",
  "followers_url": "https://api.github.com/users/chris-ian-jones/followers",
  "following_url": "https://api.github.com/users/chris-ian-jones/following{/other_user}",
  "gists_url": "https://api.github.com/users/chris-ian-jones/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/chris-ian-jones/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/chris-ian-jones/subscriptions",
  "organizations_url": "https://api.github.com/users/chris-ian-jones/orgs",
  "repos_url": "https://api.github.com/users/chris-ian-jones/repos",
  "events_url": "https://api.github.com/users/chris-ian-jones/events{/privacy}",
  "received_events_url": "https://api.github.com/users/chris-ian-jones/received_events",
  "type": "User",
  "site_admin": false,
  "name": 'Chris Jones',
  "company": null,
  "blog": "",
  "location": 'Oxford',
  "email": null,
  "hireable": null,
  "bio": 'This is my bio',
  "public_repos": 26,
  "public_gists": 1,
  "followers": 1,
  "following": 100,
  "created_at": "2019-03-12T01:42:30Z",
  "updated_at": "2019-06-24T15:30:52Z"
}
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createGitHubCard(avatar_url, name, username, location, htmlUrl, followers, following, bio) {
  const cardContainer = document.createElement('div')
  const cardUserImage = document.createElement('img')
  const cardInfoContainer = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUsername = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  // const cardProfileLink = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  cardContainer.appendChild(cardUserImage)
  cardContainer.appendChild(cardInfoContainer)
  cardInfoContainer.appendChild(cardName)
  cardInfoContainer.appendChild(cardUsername)
  cardInfoContainer.appendChild(cardLocation)
  cardInfoContainer.appendChild(cardProfile)
  // cardProfile.appendChild(cardProfileLink)
  cardInfoContainer.appendChild(cardFollowers)
  cardInfoContainer.appendChild(cardFollowing)
  cardInfoContainer.appendChild(cardBio)

  cardContainer.classList.add('card')
  cardInfoContainer.classList.add('card-info')
  cardName.classList.add('name')
  cardUsername.classList.add('username')

  cardUserImage.src = avatar_url
  cardName.textContent = name
  cardUsername.textContent = username
  cardLocation.textContent = `Location: ${location}`
  cardProfile.innerHTML = `Profile: <a href="${htmlUrl}" target="${htmlUrl}"></a>`
  // cardProfileLink.href = htmlUrl
  // cardProfileLink.target = htmlUrl
  cardFollowers.textContent = `Followers: ${followers}`
  cardFollowing.textContent = `Following: ${following}`
  cardBio.textContent = `Bio: ${bio}`
 
  console.log(cardContainer)
}
createGitHubCard(exampleObject.avatar_url, exampleObject.name, exampleObject.login, exampleObject.location, exampleObject.html_url, exampleObject.followers, exampleObject.following, exampleObject.bio)

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
