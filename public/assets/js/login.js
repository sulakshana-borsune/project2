const { axios, localStorage } = window

// localStorage.clear()

let uid = localStorage.getItem('uid')
let uname = localStorage.getItem('uname')

const createUser = () => {
  axios.post('/api/users', {
    username: document.getElementById('username').value, 
    email: document.getElementById('email').value
  })

    .then(({ data: [{ userid, username }] }) => {

      document.getElementById('message').textContent = `Thanks for creating an account! Now hit "Login" to get started.`

      document.getElementById('createUser').setAttribute('disabled', true)
    .catch(e => console.error(e))
})

document.getElementById('createUser').addEventListener('click', event => {
  // Stop the form from refreshing the page
  event.preventDefault()
  // Runs the createRecipe function
  createUser()
  console.log('you created a user')
})
}



document.getElementById('login').addEventListener('click', event => {
  // Stop the form from refreshing the page
  event.preventDefault()

  const emailVal = document.getElementById('email').value

  axios.get(`/api/users/${emailVal}`)
    .then(({ data }) => {
      localStorage.setItem('uid', data.id)
      localStorage.setItem('uname', data.username)
      localStorage.setItem('uemail', data.email)
    
      localStorage.getItem
    console.log(data.username)


  window.location.replace("/myRecipes");

})
})