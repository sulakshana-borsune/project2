const { axios, localStorage } = window

const createRegion = () => {
  axios.post('/api/regions', {
    regionName: document.getElementById('regionName').value,
    lat: document.getElementById('latitude').value,
    long: document.getElementById('longitude').value
  })
  }

  document.getElementById('createRegion').addEventListener('click', event => {
    // Stop the form from refreshing the page
    event.preventDefault()
    // Runs the createRecipe function
    createRegion()
    console.log('you created a region')
  })

