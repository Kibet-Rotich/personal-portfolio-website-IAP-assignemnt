document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollReveal and apply animations to sections
    ScrollReveal().reveal('.section', {
        delay: 300,
        distance: '100px',
        origin: 'left',
        easing: 'ease-in-out',
        reset: true, // Reset the animation when the element leaves the viewport
    });

    // Add animation to the landing content
    ScrollReveal().reveal('.landing-content', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var name = form.elements['name'].value;
        var email = form.elements['email'].value;
        var message = form.elements['message'].value;

        // Render information on the form
        var infoContainer = document.getElementById('infoContainer');
        infoContainer.innerHTML = `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            <p>Form submitted successfully!</p>
        `;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Add animation to the profile picture
    document.querySelector(".profile-picture").classList.add("animate__animated", "animate__fadeInLeft");

    // Add animation to the heading and paragraph
    document.querySelector("h1").classList.add("animate__animated", "animate__fadeInRight");
    document.querySelector("p").classList.add("animate__animated", "animate__fadeInRight");

    // Add animation to the button
    document.querySelector(".btn").classList.add("animate__animated", "animate__fadeInUp");
});
