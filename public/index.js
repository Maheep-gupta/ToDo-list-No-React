

function checkboxClicked() {
    var targetElement=event.target.id
    console.log(targetElement)
    var checkbox = document.getElementById(targetElement).checked

    // If checked
    if (checkbox) {
        document.getElementById(targetElement).parentElement.classList.add("text-decoration-line-through")
    }
    else{
        document.getElementById(targetElement).parentElement.classList.remove("text-decoration-line-through")
    }
}