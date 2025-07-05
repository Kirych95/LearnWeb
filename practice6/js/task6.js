document.addEventListener('DOMContentLoaded', function () {
    const mainPicture = document.querySelector('#main-picture')
    const pictures = document.querySelectorAll('.gallery-pictures img')

    pictures.forEach(picture => {
        picture.addEventListener('click', function() {
            mainPicture.src = this.src
        })
    })
})