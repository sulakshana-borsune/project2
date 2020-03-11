const { axios, localStorage } = window
const uid = localStorage.getItem('uid')
const uname = localStorage.getItem('uname')
const uemail = localStorage.getItem('uemail')


const renderUser = user => {
  document.getElementById('userDisplay').innerHTML = ` <div class="uk-card uk-card-default uk-card-body">Welcome ${user.username}! Here are your recipes:</div>`
}
const renderMyRec = display => {

  document.getElementById('myRecDisplay').innerHTML = ''
  const Recipes = display.Recipes

  Recipes.forEach(({ title, creatorName, recipeType, servingSize, recipeText }) => {
    const itemElem = document.createElement('div')

    itemElem.innerHTML = `
  <ul class="uk-grid-large uk-child-width-1-1 uk-child-width-1-1@suk-text-center" uk-sortable="handle: .uk-sortable-handle" uk-grid>
    <li>
        <div class="uk-card uk-card-default uk-card-body">
          <span class="uk-sortable-handle uk-margin-large-center" uk-icon="icon: bookmark"></span>
          <h2>${title}</h2>
            <p><b>Recipe Creator:</b> ${creatorName}</p>
            <p><b>Recipe Type:</b> ${recipeType}</p>
            <p><b>Serving Size:</b>${servingSize}</p>
            <p><b>Ingredients and Directions:</b></p>
            <p>${recipeText}</p>
        </div>
      </li>
    <ul>
      `

    document.getElementById('myRecDisplay').append(itemElem)

  })
}



axios.get(`/api/users/${uemail}`)
  .then(({ data }) => {
    renderUser(data)
    renderMyRec(data)
  })

document.getElementById('createRecipe').addEventListener('click', event => {
  event.preventDefault()
  window.location.replace("/createRecipe");

})



