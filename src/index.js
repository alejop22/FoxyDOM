/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
/* 
const div = document.querySelectorAll('.p-4')

const arrayList = [...div]

const numberRandom = () => {
    return Math.floor(Math.random()*(122-1))+1
}

arrayList.forEach((nodo) => {
    const img = document.createElement('img')
    img.className = 'mx-auto'
    img.src = `https://randomfox.ca/images/${numberRandom()}.jpg`
    img.width = '320'
    nodo.append(img)
}) */

import {registerImage} from './lazy'
import {imageRender} from './lazy'

const maximum = 122
const minimum = 1
export let imageAdd = 0

const random = () => Math.floor(Math.random()* (maximum - minimum)) + minimum

const createNodes = () => {
    const container = document.createElement('div')
    container.className = 'p-4'

    const image = document.createElement('img')
    image.className = 'mx-auto'
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`
    image.width = '320'

    container.appendChild(image)

    return container
}

const mountNode = document.getElementById('imagenes')

const addButton = document.querySelector('button')

const deleteButton = document.getElementById('delete')


const addImage = () => {
    imageAdd++
    console.log(`Imagen añadida: ${imageAdd}
    Imagen renderizada: ${imageRender}`);

    const newImage = createNodes();
    mountNode.appendChild(newImage)
    registerImage(newImage)
}

const deleteImage = () => {
    const containers = document.querySelectorAll('div.p-4')//NodeList
    const arrayList = [...containers]

    arrayList.forEach((node) => {
        node.remove()
    })
    imageAdd = 0
}

addButton.addEventListener('click', addImage)

deleteButton.addEventListener('click', deleteImage)

