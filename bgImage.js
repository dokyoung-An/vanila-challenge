const images = [
    "111.jpg",
    "112.jpg",
    "113.jpg",
    "114.jpg",
    "115.jpg",
    "116.jpg",
]

const bgChoice = images[Math.floor(Math.random()*images.length)]

const bg = document.createElement("img");

bg.src =`/image/${bgChoice}`


document.body.appendChild(bg);