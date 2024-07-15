let btn = document.getElementById("sidebar_fold");

btn.addEventListener("click", () => {

    btn.classList.add("active");

})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))