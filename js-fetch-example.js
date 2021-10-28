//source https://livecodestream.dev/post/5-ways-to-make-http-requests-in-javascript/#fetch

fetch("https://world.openfoodfacts.org/category/pastas/1.json")
  .then(response => {
    // indicates whether the response is successful (status code 200-299) or not
    if (!response.ok) {
      throw new Error(`Request failed with status ${reponse.status}`)
    }
    return response.json()
  })
  .then(data => {
    console.log(data.count)
    console.log(data.products)
  })
  .catch(error => console.log(error))

async function postData () {
  const food = {
    name: "Bread",
    weight: 450,
    quantity: 3
  }

  const response = await fetch("/food", {
    method: "POST",
    body: JSON.stringify(food),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${reponse.status}`)
  }
  console.log("Request successful!")
}
