axios.get("https://world.openfoodfacts.org/category/pastas/1.json")
  .then(response => {
    // access parsed JSON response data using response.data field
    data = response.data
    console.log(data.count)
    console.log(data.products)
  })
  .catch(error => {
    if (error.response) {
      //get HTTP error code
      console.log(error.reponse.status)
    } else {
      console.log(error.message)
    }
  })

async function postData () {
  const food = {
    name: "Bread",
    weight: 450,
    quantity: 3
  }

  try {
    const response = await axios.post("/food", food)
    console.log("Request successful!")
  } catch (error) {
    if (error.response) {
      console.log(error.reponse.status)
    } else {
      console.log(error.message)
    }
  }
}
