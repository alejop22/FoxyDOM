import {imageAdd} from './index.js'
export let imageRender = 0
const isIntersecting = (entry) => {
    return entry.isIntersecting; //true (visible nemi viewport)
};

const loadImage = (entry) => {
    const container = entry.target //container DIV}
    const image = container.firstChild
    const url = image.dataset.src
    //load image
    image.src = url
    imageRender++
    if (imageAdd === 1) {
        imageRender = 1
    }
    console.log(`Imagen añadida: ${imageAdd}
    Imagen renderizada: ${imageRender}`);

    observer.unobserve(container)//Deje de escuchar despues de hacer la accion

}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) => {
    observer.observe(image)
}