const { axios, localStorage } = window

const renderAllRec = display => {

  document.getElementById('allRecDisplay').innerHTML = ''

    display.forEach(({title, User, creatorName, recipeType, servingSize, recipeText}) => {
      const itemElem = document.createElement('div')

      itemElem.innerHTML = `
  <ul class="uk-grid-large uk-child-width-1-1 uk-child-width-1-1@suk-text-center" uk-sortable="handle: .uk-sortable-handle" uk-grid>
    <li>
        <div class="uk-card uk-card-default uk-card-body">
          <span class="uk-sortable-handle uk-margin-large-center" uk-icon="icon: bookmark"></span>
          <h2>${title}</h2>
            <p><b>User:</b> ${User.username}</p>
            <p><b>Recipe Creator:</b> ${creatorName}</p>
            <p><b>Recipe Type:</b> ${recipeType}</p>
            <p><b>Serving Size:</b>${servingSize}</p>
            <p><b>Ingredients and Directions:</b></p>
            <p>${recipeText}</p>
        </div>
      </li>
    <ul>
      `

    document.getElementById('allRecDisplay').append(itemElem)

  })
}

// $.ajax({
//   method: "GET",
//   url: "/api/recipes"
// }).then(function (data) {
//   console.log(data[0].title, data[1].User.username)
//   renderAllRec(data)
// })

axios.get('/api/recipes')
.then(({data}) => {
  renderAllRec(data)
})

