/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// define array of GitHub usernames
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// loop over array of GitHub usernames
followersArray.forEach(username => {

  // for each item in array, make a GET request via axios to GitHub api
  // template literal includes current item in array (Github username)
  axios.get(`https://api.github.com/users/${username}`)

    // if promise's state is 'fulfilled', pass the api data to createGitHubCard component
    // create new component and append it as child to cards div which we grabbed from the body of existing html
    .then(data => {
      const userData = data.data
      const newCard = createGitHubCard(userData)
      const mainCardsContainer = document.querySelector('.cards')
      mainCardsContainer.appendChild(newCard)

      // grab the current user in the arrays followers url 
      const userFollowersUrl = userData.followers_url
      
      // STRETCH: chained promise, to programattically get followers data
      // make a GET request via axios to GitHub api to get object of followers data
      axios.get(userFollowersUrl)
        .then(data => {
          const userFollowersArray = data.data
          
          // to prevent hitting the api rate limit:
          // loop through object of followers data from api call
          // passing each first three followers usernames into new array
          const followersUsernameArray = []
          for (let i = 0; i <3; i++) {
            followersUsernameArray.push(userFollowersArray[i].login)
          }

          // loop through array of 3 x followers usernames, making a GET request via axios to GitHub api to get object of follower data
          followersUsernameArray.forEach(followersUsername => {
            axios.get(`https://api.github.com/users/${followersUsername}`)

            // if promise's state is 'fulfilled', pass the api data to createGitHubCard component
            // create new component and append it as child to cards div which we grabbed from the body of existing html
            .then(data => {
              const followerData = data.data
              const newFollowerCard = createGitHubCard(followerData)
              mainCardsContainer.appendChild(newFollowerCard)
            })
            
            // if third promise's state is 'rejected', log the error message
            .catch(error => {
              console.log("You've got an error on third promise")
            })
          })
        })
        
        // if second promise's state is 'rejected', log the error message
        .catch(error => {
          console.log("You've got an error on second promise")
        })
    })

    // if first promise's state is 'rejected', log the error message
    .catch(error => {
      console.log("You've got an error on first promise")
    })
})

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

// component to create above DOM element, passing in data from api
function createGitHubCard(object) {

  // create elements
  const cardContainer = document.createElement('div')
  const cardUserImage = document.createElement('img')
  const cardInfoContainer = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUsername = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  // append the elements as children to build html scaffolding
  cardContainer.appendChild(cardUserImage)
  cardContainer.appendChild(cardInfoContainer)
  cardInfoContainer.appendChild(cardName)
  cardInfoContainer.appendChild(cardUsername)
  cardInfoContainer.appendChild(cardLocation)
  cardInfoContainer.appendChild(cardProfile)
  cardInfoContainer.appendChild(cardFollowers)
  cardInfoContainer.appendChild(cardFollowing)
  cardInfoContainer.appendChild(cardBio)

  // add classlists to elements for css styling
  cardContainer.classList.add('card')
  cardInfoContainer.classList.add('card-info')
  cardName.classList.add('name')
  cardUsername.classList.add('username')

  // add/update attributes for elements
  cardUserImage.src = object.avatar_url
  cardName.textContent = object.name
  cardUsername.textContent = object.login
  cardLocation.textContent = `Location: ${object.location}`
  cardProfile.innerHTML = `Profile: <a href="${object.html_url}" target="${object.html_url}">${object.html_url}</a>`
  cardFollowers.textContent = `Followers: ${object.followers}`
  cardFollowing.textContent = `Following: ${object.following}`
  cardBio.textContent = `Bio: ${object.bio}`
 
  // return the parent div of all elements created
  return cardContainer
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
