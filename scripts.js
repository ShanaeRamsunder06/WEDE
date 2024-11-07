window.onload = function () {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // Format date as needed
    document.getElementById('dateStamp').innerText = formattedDate;
};

// Function to show the lightbox with the clicked image
function showLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'block';
}

// Function to close the lightbox when clicked
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

//function to clearfield 
function clearfield(element) {
    element.value = '';
}

//function for validation
function validationForm() {
    var name = document.forms["myForm"]["name"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;
    if (name == "" || phone == "" || email == "" || message == "") {
        alert("Name must be filled out");
        return false;
    }
    return true;
}

