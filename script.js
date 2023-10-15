// Liste d'objets et leurs images 
const objects = [
    { name: "Crocs Pollex Clog", image: "img/s-l1600 (2).jpg", price: 31 },
    { name: "Salehe Bembury Pollex Clog ", image: "img/s-l1600 (1).jpg", price: 99 },
    { name: "Crocs DreamWorks Shrek", image: "img/s-l1600 (3).jpg", price: 60 },
    { name: "NWT Croc", image: "img/s-l1600.jpg", price: 29 },
    { name: " Bayaband Chevron Clogs", image: "img/12-13-2022-men-view-all-all-terrain.jpg", price: 29 },

]
const resetButton = document.getElementById("reset")

let currentObjectIndex
let targetPrice
let attempts = 10

const objectImage = document.getElementById("object-image-1")
const objectName = document.getElementById("object-name")
const guessInput = document.getElementById("guess")
const submitButton = document.getElementById("submit")
const message = document.getElementById("message")
const attemptsDisplay = document.getElementById("attempts")

function chooseRandomObject() {
    currentObjectIndex = Math.floor(Math.random() * objects.length)
    currentObject = objects[currentObjectIndex]
    targetPrice = currentObject.price

    for (let i = 1; i <= 5; i++) {
        const img = document.getElementById(`object-image-${i}`)
        img.classList.add("hidden")
    }

    const visibleImage = document.getElementById(`object-image-${currentObjectIndex + 1}`)
    visibleImage.classList.remove("hidden")

    objectName.textContent = currentObject.name
    guessInput.value = ""
    message.textContent = ""
    attemptsDisplay.textContent = attempts
    submitButton.disabled = false
}

function checkGuess() {
    const userGuess = parseInt(guessInput.value)
    attempts--

    if (userGuess === targetPrice) {
        message.textContent = "Bravo, vous avez trouvé le juste prix!"
        submitButton.disabled = true


    } else {
        const difference = Math.abs(userGuess - targetPrice)
        if (difference <= 5) {
            message.textContent = "Chaud!"
        } else if (difference <= 20) {
            message.textContent = "Tiède"
        } else {
            message.textContent = "Froid"
        }

        if (attempts === 0) {
            alert(`GROS NUUUUUL !!. Le juste prix était ${targetPrice} euros.`)
            message.textContent = `GROS NUUUUUL !!. Le juste prix était ${targetPrice} euros.`
            submitButton.disabled = true
        }
    }
    attemptsDisplay.textContent = attempts
}

submitButton.addEventListener("click", checkGuess)

chooseRandomObject()

resetButton.addEventListener("click", () => {
    chooseRandomObject()
    // Vous pouvez ajouter d'autres réinitialisations ici si nécessaire
});