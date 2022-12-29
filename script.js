async function run() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
        const data = await response.json()
        createBreedList(data.message)
    } catch (e) {
        console.log("There was a problem fetching the breed list.")
    }
}

run()

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
          <option>Choose a dog breed</option>
          ${Object.keys(breedList).map(function (breed) {
        return `<option>${breed}</option>`
    })}
    </select>
    `
    img = "https://img.freepik.com/free-vector/one-cute-dog-white-background_1308-44313.jpg?w=2000"
    document.getElementById("img").setAttribute("src", img)
}

async function loadByBreed(breed) {
    if (breed != "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        document.getElementById("img").setAttribute("src", data.message[0])

    }
    else {
        img = "https://img.freepik.com/free-vector/one-cute-dog-white-background_1308-44313.jpg?w=2000"
        document.getElementById("img").setAttribute("src", img)
    }
}