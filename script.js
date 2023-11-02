document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".home");
    var dropdownContent = document.querySelector(".dropdown-content");

    button.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches(".home")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });
});
