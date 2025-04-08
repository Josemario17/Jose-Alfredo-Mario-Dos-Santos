//go to top 
document.querySelector("#click-to-top").onclick = function(){
    document.querySelector("body").scrollIntoView();
}

//type submit function
const sendMessage = document.getElementById("sendMessage")
let requiridElements = document.querySelectorAll("form *[required]")

sendMessage.addEventListener("submit", (e)=>{
    e.preventDefault()
    document.getElementById("messageSuccess").classList.remove("display-none")
    for (let index = 0; index < requiridElements.length; index++) {
        requiridElements[index].value = ""
    }
    setTimeout(() => {    
        document.getElementById("messageSuccess").classList.add("display-none")
    }, 2500);
})

const dataLocalArea = document.getElementById("date")
var dataLocal = new Date()
dataLocalArea.innerText = "" + dataLocal.getFullYear()

// ----- Image Gallery for Latest Project -----
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainProjectImage');
    const thumbnails = document.querySelectorAll('.thumbnail-container .thumbnail');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Update the main image src
                mainImage.src = this.src;
                mainImage.alt = this.alt; // Update alt text too for accessibility

                // Update the active thumbnail class
                thumbnails.forEach(t => t.classList.remove('active-thumbnail'));
                this.classList.add('active-thumbnail');
            });
        });
    }
});

// ----- Lightbox Functionality -----
document.addEventListener('DOMContentLoaded', () => {
    const mainProjectImage = document.getElementById('mainProjectImage');
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeBtn = document.querySelector('.lightbox-close');

    if (mainProjectImage && lightbox && lightboxImage && closeBtn) {
        // Open lightbox when main image is clicked
        mainProjectImage.addEventListener('click', () => {
            lightbox.style.display = 'block'; // Show the lightbox
            lightboxImage.src = mainProjectImage.src;
        });

        // Close lightbox when the close button is clicked
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) { // Check if the click is on the background itself
                lightbox.style.display = 'none';
            }
        });
    }
});